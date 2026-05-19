import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Download, MessageCircle, ArrowLeft } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20baixei%20o%20material%20da%20Bricer%20sobre%20NR-1%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs.";
const PDF_URL = "/material-bricer-nr1.pdf";

export const Route = createFileRoute("/obrigado-nr1")({
  head: () => ({
    meta: [
      { title: "Obrigado! Acesse o material NR-1 | Bricer" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--accent-red)]/10 text-[color:var(--accent-red)]">
          <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Obrigado! Seu material está pronto.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/75">
          Enviamos uma cópia para o seu e-mail. Você também pode acessar o PDF agora
          mesmo pelo botão abaixo.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent-red)] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[color:var(--accent-red)]/90 hover:shadow-lg"
          >
            <Download className="h-4 w-4" />
            Acessar o material em PDF
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com a Bricer no WhatsApp
          </a>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary p-7 text-left">
          <h2 className="text-lg font-bold text-primary">Próximos passos</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Leia o material com calma e mapeie onde sua empresa já tem dados sobre
            afastamentos, clima e desgaste. Quando quiser estruturar o cuidado com
            método, fale com nosso time.
          </p>
        </div>

        <Link
          to="/nr1-saude-mental-corporativa"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a página
        </Link>
      </div>
    </main>
  );
}
