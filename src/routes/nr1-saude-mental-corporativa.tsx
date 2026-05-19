import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  ShieldCheck,
  TrendingUp,
  Users,
  AlertTriangle,
  EyeOff,
  Activity,
  HeartHandshake,
  ClipboardList,
  Gauge,
  Timer,
  Compass,
  MessageSquare,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";
import { LeadModal, openLeadModal } from "@/components/lead-modal";

export const Route = createFileRoute("/nr1-saude-mental-corporativa")({
  head: () => ({
    meta: [
      { title: "NR-1 e riscos psicossociais: o que o RH precisa fazer | Bricer" },
      {
        name: "description",
        content:
          "Entenda o que mudou na NR-1, como os riscos psicossociais impactam empresas e como o RH pode estruturar prevenção, gestão e evidências.",
      },
      {
        name: "keywords",
        content:
          "NR-1, riscos psicossociais, saúde mental corporativa, NR-1 RH, gestão de riscos psicossociais, saúde e segurança do trabalho, absenteísmo, afastamentos, saúde corporativa",
      },
      {
        property: "og:title",
        content: "NR-1 e riscos psicossociais: o que o RH precisa fazer | Bricer",
      },
      {
        property: "og:description",
        content:
          "Atualização da NR-1: o que muda, por que importa e como o RH começa a agir com método.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/nr1-saude-mental-corporativa" },
    ],
    links: [{ rel: "canonical", href: "/nr1-saude-mental-corporativa" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "NR-1 e riscos psicossociais: o que o RH precisa fazer",
          description:
            "Entenda o que mudou na NR-1, como os riscos psicossociais impactam empresas e como o RH pode estruturar prevenção, gestão e evidências.",
          author: { "@type": "Organization", name: "Bricer Consultoria" },
          publisher: { "@type": "Organization", name: "Bricer Consultoria" },
        }),
      },
    ],
  }),
  component: Nr1Page,
});

/* -------------------------------------------------------------------------- */

function CtaButton({
  children,
  variant = "accent",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "accent" | "outline" | "ghost-light";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg";
  const styles =
    variant === "accent"
      ? "bg-[color:var(--accent-red)] text-[color:var(--accent-red-foreground)] hover:bg-[color:var(--accent-red)]/90"
      : variant === "ghost-light"
        ? "bg-white text-primary hover:bg-white/90"
        : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <button type="button" onClick={openLeadModal} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/nr1-saude-mental-corporativa" className="flex items-center gap-2">
        </Link>
        <button
          type="button"
          onClick={openLeadModal}
          className="hidden items-center gap-2 rounded-full bg-[color:var(--accent-red)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[color:var(--accent-red)]/90 md:inline-flex"
        >
          <Download className="h-4 w-4" />
          Baixar material
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_45%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--accent-red)_10%,transparent),transparent_45%)]" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
          <ShieldCheck className="h-3.5 w-3.5" />
          Atualização NR-1 · vigência 26.05.2026
        </span>
        <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-primary md:text-5xl lg:text-6xl">
          Cuidar das pessoas virou{" "}
          <span className="text-[color:var(--accent-red)]">responsabilidade</span>,
          não diferencial.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/75">
          Com a atualização da NR-1, saúde e segurança no trabalho passam a incluir
          também os riscos psicossociais. Entenda o que muda, por que importa e como
          o RH começa a agir com método.
        </p>
        <p className="mt-4 text-base italic text-muted-foreground">
          Afinal, de cuidado, a gente entende.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton variant="accent">
            <Download className="h-4 w-4" />
            Baixar material gratuito
          </CtaButton>
          <a
            href="#nr1"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
          >
            Entender o que mudou
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Introducao() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Saúde no trabalho deixou de caber em um único benefício.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-foreground/80">
            A norma reforça que saúde e segurança no trabalho não se limitam aos riscos
            físicos ou operacionais. Agora, os RHs também precisam olhar para fatores
            que durante muito tempo passaram despercebidos: estresse, sobrecarga,
            pressão excessiva, conflitos e desgaste emocional.
          </p>
          <div className="rounded-2xl border-l-4 border-[color:var(--accent-red)] bg-secondary p-7">
            <p className="text-base leading-relaxed text-foreground/80">
              Falar de saúde no trabalho era, por muito tempo, falar de plano de saúde,
              exames e ações pontuais. Esse cenário mudou.{" "}
              <span className="font-semibold text-primary">
                Prevenir agravos à saúde mental do trabalhador agora também faz parte
                da responsabilidade da empresa.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  {
    icon: TrendingUp,
    value: "+540 mil",
    label: "benefícios do INSS",
    desc: "concedidos por transtornos mentais e comportamentais.",
    accent: "red",
  },
  {
    icon: AlertTriangle,
    value: "+134%",
    label: "de afastamentos",
    desc: "por saúde mental entre 2022 e 2024.",
    accent: "red",
  },
  {
    icon: Users,
    value: "4 em 10",
    label: "pessoas ativas",
    desc: "já sinalizam algum tipo de risco psicossocial.",
    accent: "blue",
  },
  {
    icon: Activity,
    value: "70–90%",
    label: "dos custos do adoecimento",
    desc: "vêm de perdas de produção, não de despesas diretas de saúde.",
    accent: "blue",
  },
  {
    icon: EyeOff,
    value: "35%",
    label: "das mulheres já sofreram assédio sexual",
    desc: "mas apenas 10% recorreram a canais de denúncia.",
    accent: "red",
  },
] as const;

function Cenario() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Os números que colocaram os riscos psicossociais no centro da conversa.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Para o RH, esses dados ajudam a transformar uma conversa subjetiva em algo
            mensurável.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s) => {
            const Icon = s.icon;
            const valueColor =
              s.accent === "red" ? "text-[color:var(--accent-red)]" : "text-primary";
            return (
              <article
                key={s.label}
                className="group flex flex-col rounded-2xl border border-border bg-background p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className={`text-4xl font-extrabold leading-none ${valueColor}`}>
                  {s.value}
                </div>
                <div className="mt-2 text-base font-semibold text-foreground">
                  {s.label}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaBanner({
  eyebrow,
  title,
  subtitle,
  button,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  button: string;
}) {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[color:var(--primary-dark)] px-8 py-14 text-primary-foreground shadow-xl md:px-14 md:py-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--accent-red)]/25 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              {eyebrow && (
                <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  {eyebrow}
                </span>
              )}
              <h2 className="mt-2 text-2xl font-bold leading-tight md:text-3xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/85">{subtitle}</p>
            </div>
            <div className="flex md:justify-end">
              <CtaButton variant="accent">
                <Download className="h-4 w-4" />
                {button}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Transicao() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">
          Consciência não basta.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/75 md:text-xl">
          O grande desafio agora é transformar consciência em prática, intenção em
          estrutura e discurso em decisão. É aqui que a NR-1 entra: não como uma
          conversa isolada sobre norma, mas como parte de um movimento maior para
          organizar o cuidado dentro das empresas.
        </p>
      </div>
    </section>
  );
}

function OQueENR1() {
  return (
    <section id="nr1" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="md:sticky md:top-24 md:self-start">
            <div className="inline-flex flex-col items-start gap-4 rounded-2xl border border-border bg-background p-7 shadow-md">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Norma Regulamentadora
              </span>
              <span className="text-6xl font-extrabold leading-none text-primary">
                NR-1
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-red)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                <Timer className="h-3.5 w-3.5" />
                Vigência: 26 de maio de 2026
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              O que é a NR-1 e o que muda agora.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              A NR-1 não é uma norma nova. Foi criada em 1978, junto com o conjunto
              das Normas Regulamentadoras de Saúde e Segurança do Trabalho. O que
              passa a valer em 2026 é uma atualização que reforça a necessidade de
              olhar para os{" "}
              <span className="font-semibold text-primary">
                riscos psicossociais relacionados ao trabalho
              </span>
              .
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-background p-7">
              <p className="text-base leading-relaxed text-foreground/80">
                A NR-1 estabelece diretrizes e requisitos para o{" "}
                <span className="font-semibold text-primary">
                  gerenciamento de riscos ocupacionais
                </span>{" "}
                e para as medidas de prevenção em Segurança e Saúde no Trabalho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PILARES = [
  {
    n: "01",
    icon: HeartHandshake,
    title: "Prevenção e promoção da saúde",
    desc: "Campanhas, orientação, acompanhamento de afastamentos, iniciativas de bem-estar, saúde mental e ocupacional, e uso inteligente do plano de saúde.",
  },
  {
    n: "02",
    icon: ShieldCheck,
    title: "Ambiente seguro e relações saudáveis",
    desc: "Segurança psicológica, escuta ativa, prevenção ao assédio, clima organizacional, comunicação e qualidade das relações entre lideranças e equipes.",
  },
  {
    n: "03",
    icon: ClipboardList,
    title: "Gestão estruturada de riscos",
    desc: "Acompanhamento de indicadores, análise de dados, registro de ações, monitoramento de sinais de desgaste e construção de planos de ação.",
  },
] as const;

function Pilares() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Saúde corporativa não cabe em um único benefício.
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            O plano de saúde é essencial, mas o cuidado não começa quando alguém
            adoece. Ele se constrói como um guarda-chuva, com três pilares.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILARES.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.n}
                className="group relative flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-extrabold text-primary/15 transition-colors group-hover:text-primary/30">
                    {p.n}
                  </span>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const RISCOS = [
  {
    icon: Gauge,
    title: "Carga e ritmo de trabalho",
    desc: "Sobrecarga, prazos apertados, urgências constantes e jornadas longas ou imprevisíveis.",
  },
  {
    icon: Compass,
    title: "Autonomia e clareza",
    desc: "Baixa autonomia, falta de clareza sobre responsabilidades e metas incompatíveis com a estrutura disponível.",
  },
  {
    icon: MessageSquare,
    title: "Relações e liderança",
    desc: "Conflitos internos, apoio insuficiente, lideranças despreparadas, assédio moral ou sexual e ausência de segurança psicológica.",
  },
  {
    icon: BadgeCheck,
    title: "Reconhecimento e segurança",
    desc: "Falta de reconhecimento, insegurança sobre o futuro do emprego, medo de retaliação e percepção de injustiça.",
  },
] as const;

function Riscos() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Não é uma pauta abstrata de bem-estar.
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Riscos psicossociais têm impacto direto na produtividade, nos
            afastamentos, na retenção de talentos, na reputação da empresa e na
            sustentabilidade do negócio.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {RISCOS.map((r) => {
            const Icon = r.icon;
            return (
              <article
                key={r.title}
                className="flex gap-5 rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--accent-red)]/10 text-[color:var(--accent-red)]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GroPgr() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            A NR-1 não exige apenas intenção. Ela exige método.
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            A norma orienta um processo organizado para{" "}
            <span className="font-semibold text-primary">
              identificar, avaliar, controlar e acompanhar
            </span>{" "}
            os riscos ocupacionais, incluindo os psicossociais.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-border bg-background shadow-md">
            <div className="bg-primary px-8 py-7 text-primary-foreground">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Lógica de gestão
              </div>
              <div className="mt-1 text-4xl font-extrabold tracking-tight">GRO</div>
              <div className="mt-1 text-sm font-medium text-white/85">
                Gerenciamento de Riscos Ocupacionais
              </div>
            </div>
            <div className="px-8 py-7">
              <p className="text-base leading-relaxed text-foreground/80">
                A lógica de gestão. Mostra{" "}
                <span className="font-semibold text-primary">
                  como a empresa gerencia os riscos
                </span>{" "}
                — princípios, fluxos e responsabilidades.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-border bg-background shadow-md">
            <div className="bg-[color:var(--accent-red)] px-8 py-7 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/80">
                Materialização do processo
              </div>
              <div className="mt-1 text-4xl font-extrabold tracking-tight">PGR</div>
              <div className="mt-1 text-sm font-medium text-white/90">
                Programa de Gerenciamento de Riscos
              </div>
            </div>
            <div className="px-8 py-7">
              <p className="text-base leading-relaxed text-foreground/80">
                A materialização do processo. Mostra{" "}
                <span className="font-semibold text-primary">
                  o que será feito, por quem, quando e com quais evidências
                </span>
                .
              </p>
            </div>
          </article>
        </div>

        <blockquote className="mt-12 rounded-3xl border-l-4 border-[color:var(--accent-red)] bg-secondary p-8 md:p-10">
          <p className="text-xl font-semibold leading-snug text-primary md:text-2xl">
            “A NR-1 não pede apenas que a empresa se importe. Ela pede que a empresa
            consiga demonstrar como cuida.”
          </p>
        </blockquote>
      </div>
    </section>
  );
}

const PERGUNTAS = [
  "Quais áreas apresentam mais sinais de desgaste?",
  "Quais lideranças concentram mais conflitos ou rotatividade?",
  "Existem padrões de afastamento por equipe, função ou período?",
  "As metas são compatíveis com a estrutura disponível?",
  "Os canais de escuta e denúncia são conhecidos e confiáveis?",
];

function PorOndeComecar() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Cuidado com método.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Começar não significa resolver tudo de uma vez. O primeiro movimento é
              criar clareza sobre o que já está acontecendo: atestados, afastamentos,
              turnover, pesquisas de clima, denúncias, absenteísmo, conflitos
              recorrentes e sobrecarga.
            </p>
          </div>
          <div className="space-y-3">
            {PERGUNTAS.map((q, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--accent-red)]"
                  strokeWidth={2}
                />
                <p className="text-base font-medium text-primary">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Fechamento() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[color:var(--primary-dark)] py-24 text-primary-foreground md:py-32">
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2),transparent_45%),radial-gradient(circle_at_85%_70%,rgba(227,21,21,0.35),transparent_45%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Cuidar deixa de ser reação.
          <br />
          <span className="text-[color:var(--accent-red)]">
            E passa a ser gestão.
          </span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
          Quando a empresa acompanha seus indicadores e entende onde estão seus
          maiores riscos, ela ganha previsibilidade, reduz exposição e constrói um
          ambiente mais saudável e sustentável.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton variant="accent">
            <Download className="h-4 w-4" />
            Baixar material gratuito
          </CtaButton>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg"
          >
            Falar com a Bricer
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">
            B
          </span>
          <span className="font-bold text-primary">Bricer Consultoria</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bricer. Cuidado com método.
        </p>
      </div>
    </footer>
  );
}

function Nr1Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Introducao />
        <Cenario />
        <CtaBanner
          eyebrow="Atenção, RH"
          title="Esses números já podem estar dentro da sua empresa."
          subtitle="A pergunta é: sua gestão está preparada para enxergar, registrar e agir sobre esses sinais?"
          button="Quero acessar o material completo"
        />
        <Transicao />
        <OQueENR1 />
        <Pilares />
        <Riscos />
        <GroPgr />
        <CtaBanner
          eyebrow="Material gratuito"
          title="Não basta entender a NR-1. É preciso saber como aplicar isso na prática."
          subtitle="Baixe gratuitamente o material completo e veja como estruturar esse cuidado com método, indicadores e gestão."
          button="Baixar e-book gratuito"
        />
        <PorOndeComecar />
        <Fechamento />
      </main>
      <SiteFooter />
      <LeadModal />
    </div>
  );
}
