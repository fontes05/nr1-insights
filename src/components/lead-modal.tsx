import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Download, Loader2, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ---------- tiny module-level store so any CTA can trigger modal ---------- */
const listeners = new Set<(v: boolean) => void>();
let openState = false;
export function openLeadModal() {
  openState = true;
  listeners.forEach((l) => l(true));
}
function closeLeadModal() {
  openState = false;
  listeners.forEach((l) => l(false));
}

const COMPANY_SIZES = [
  "1 a 9 colaboradores",
  "10 a 29 colaboradores",
  "30 a 99 colaboradores",
  "100 a 499 colaboradores",
  "500+ colaboradores",
];

export function LeadModal() {
  const [open, setOpen] = useState(openState);
  const [submitting, setSubmitting] = useState(false);
  const [companySize, setCompanySize] = useState<string>("");
  const [consent, setConsent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const l = (v: boolean) => setOpen(v);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  function handleOpenChange(v: boolean) {
    if (!v) closeLeadModal();
    setOpen(v);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent || !companySize) return;
    setSubmitting(true);
    // Placeholder submit — integrar com backend posteriormente
    await new Promise((r) => setTimeout(r, 600));
    closeLeadModal();
    setSubmitting(false);
    navigate({ to: "/obrigado-nr1" });
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto p-0 sm:max-w-[560px]">
        <div className="bg-primary px-7 py-6 text-primary-foreground">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
            <ShieldCheck className="h-3.5 w-3.5" />
            Material gratuito Bricer
          </div>
          <DialogHeader className="mt-2 space-y-1.5 text-left">
            <DialogTitle className="text-2xl font-bold tracking-tight text-white">
              Receba o e-book completo sobre NR-1
            </DialogTitle>
            <DialogDescription className="text-sm text-white/85">
              Preencha os dados abaixo para acessar o material em PDF.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-7 py-6">
          <Field id="nome" label="Nome completo" required>
            <Input id="nome" name="nome" required maxLength={120} autoComplete="name" />
          </Field>
          <Field id="empresa" label="Empresa" required>
            <Input
              id="empresa"
              name="empresa"
              required
              maxLength={120}
              autoComplete="organization"
            />
          </Field>
          <Field id="cargo" label="Cargo" required>
            <Input
              id="cargo"
              name="cargo"
              required
              maxLength={120}
              autoComplete="organization-title"
            />
          </Field>
          <Field id="email" label="E-mail corporativo" required>
            <Input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
            />
          </Field>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field id="dob" label="Data de nascimento" required>
              <Input id="dob" name="dob" type="date" required />
            </Field>
            <Field id="size" label="Sua empresa tem quantos funcionários?" required>
              <Select value={companySize} onValueChange={setCompanySize} required>
                <SelectTrigger id="size" className="h-9">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {COMPANY_SIZES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-secondary/60 p-4">
            <Checkbox
              checked={consent}
              onCheckedChange={(v) => setConsent(v === true)}
              required
              className="mt-0.5"
            />
            <span className="text-sm leading-relaxed text-foreground/80">
              Concordo em receber contato da Bricer e informações relacionadas ao
              material solicitado.
            </span>
          </label>

          <button
            type="submit"
            disabled={submitting || !consent || !companySize}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--accent-red)] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent-red)]/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Receber material agora
              </>
            )}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Seus dados estão protegidos conforme a LGPD.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-primary">
        {label}
        {required && <span className="ml-1 text-[color:var(--accent-red)]">*</span>}
      </Label>
      {children}
    </div>
  );
}
