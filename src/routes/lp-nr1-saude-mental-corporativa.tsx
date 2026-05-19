import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/lp-nr1-saude-mental-corporativa")({
  head: () => ({
    meta: [
      { title: "Material gratuito NR-1 e saúde mental corporativa | Bricer" },
      {
        name: "description",
        content:
          "Baixe o e-book completo da Bricer sobre NR-1, riscos psicossociais e gestão estruturada de saúde mental no trabalho.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LpPlaceholder,
});

function LpPlaceholder() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent-red)]">
          Landing Page
        </p>
        <h1 className="mt-4 text-4xl font-bold text-primary">
          Material gratuito — NR-1 e saúde mental corporativa
        </h1>
        <p className="mt-4 text-muted-foreground">
          Esta é a Landing Page de captura do e-book. O formulário será adicionado aqui.
        </p>
        <Link
          to="/nr1-saude-mental-corporativa"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[color:var(--primary-dark)]"
        >
          Voltar para a página NR-1
        </Link>
      </div>
    </main>
  );
}
