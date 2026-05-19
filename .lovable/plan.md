# Página institucional NR-1 — Bricer Consultoria

Construir uma página de site (não LP) focada em autoridade e SEO sobre a atualização da NR-1 e riscos psicossociais, com CTAs apontando para `/lp-nr1-saude-mental-corporativa`.

## Rota e arquivos

- Nova rota: `src/routes/nr1-saude-mental-corporativa.tsx` (rota dedicada, SEO-friendly via `head()`).
- Componentes da página em `src/components/nr1/` para manter o arquivo de rota limpo:
  - `Hero.tsx`, `Introducao.tsx`, `CenarioDados.tsx`, `CtaBanner.tsx` (reutilizável), `Transicao.tsx`, `OQueENR1.tsx`, `TresPilares.tsx`, `RiscosPsicossociais.tsx`, `GroPgr.tsx`, `PorOndeComecar.tsx`, `Fechamento.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx`.
- Imagem hero gerada via `imagegen` (composição executiva: dashboard de indicadores / leitura de riscos invisíveis, paleta azul Bricer), salva em `src/assets/hero-nr1.jpg`.

## Design system (atualizar `src/styles.css`)

- Tokens semânticos em oklch equivalentes a:
  - `--primary` = #22397A (azul Bricer)
  - `--destructive` / novo `--accent-red` = #E31515 (vermelho destaque para CTAs)
  - `--background` = #FFFFFF, `--foreground` próximo a #0E1730
  - `--muted`, `--border`, `--card` claros e arejados
- Fonte Poppins via `@import` Google Fonts no topo de `styles.css` + `body { font-family: 'Poppins', sans-serif }`.
- Raios arredondados (cards ~`rounded-2xl`), sombras suaves, muito respiro.
- Variantes de botão: `primary` (azul), `accent` (vermelho) — ajustar `src/components/ui/button.tsx` com variantes adicionais ou usar classes utilitárias com tokens.

## Estrutura da página (H1 único + H2 por seção)

1. **Header simples** — CTA "Baixar material" (link LP).
2. **Hero** (H1): "Cuidar das pessoas virou responsabilidade, não diferencial." + subtítulo + frase de apoio + 2 botões (vermelho "Baixar material gratuito", outline azul "Entender o que mudou" âncora para `#nr1`). Imagem/composição executiva à direita (desktop) / abaixo (mobile).
3. **Introdução** (H2) — dois parágrafos curtos lado a lado em grid 2 col.
4. **Cenário — dados** (H2) — grid de 5 cards com números grandes em vermelho/azul, fonte e descrição. Ícones lineares (lucide).
5. **CTA Banner #2** — bloco azul com título, subtítulo e botão vermelho "Quero acessar o material completo".
6. **Transição** (H2) — bloco centralizado, tipografia grande.
7. **O que é a NR-1** (H2, id `nr1`) — selo de vigência em destaque (badge vermelho "Vigência: 26 de maio de 2026"), texto + complemento em card.
8. **Os três pilares** (H2) — 3 cards numerados 01/02/03.
9. **Riscos psicossociais** (H2) — 4 cards em grid 2x2.
10. **Na prática — GRO x PGR** (H2) — comparativo premium em 2 cards lado a lado com cabeçalho colorido (azul/vermelho), seguido de frase forte destacada em blockquote estilizado.
11. **CTA Banner #3** — fundo azul, botão vermelho "Baixar e-book gratuito".
12. **Por onde começar** (H2) — texto + lista de 5 perguntas em destaque (cards/checklist com ícone).
13. **Fechamento** (H2) — título em duas linhas, texto, dois CTAs (vermelho "Baixar material gratuito" + outline "Falar com a Bricer").
14. **Footer** simples com marca e direitos.

Todos os botões/CTAs primários → `<Link to="/lp-nr1-saude-mental-corporativa">` (criar placeholder mínimo dessa rota para não quebrar typecheck do TanStack Router: `src/routes/lp-nr1-saude-mental-corporativa.tsx` com placeholder "LP em breve").

## SEO (`head()` da rota)

- `title`: "NR-1 e riscos psicossociais: o que o RH precisa fazer | Bricer"
- `description`: conforme briefing
- `og:title`, `og:description`, `og:type=article`, `og:url`, canonical `/nr1-saude-mental-corporativa`
- JSON-LD `Article` em `scripts`
- H1 único no Hero; demais seções com H2; subtítulos H3 onde necessário
- Alt em imagens, semântica (`section`, `article`)

## Responsividade / UX

- Mobile-first: grids colapsam para 1 coluna; tipografia fluida; CTAs full-width no mobile.
- Sem formulários. Sem peso visual excessivo. Ícones lineares (lucide-react já disponível).
- Animações sutis: fade/slide-in em scroll usando classes utilitárias (sem libs novas).

## Detalhes técnicos

- Atualizar `src/routes/index.tsx`? Não — o briefing pede a página NR-1; deixar index como está OU redirecionar. **Decisão:** manter index intocado nesse plano (escopo é a nova página). Acessível via `/nr1-saude-mental-corporativa`.
- Sem backend, sem Cloud, sem dependências novas.
- Conferir build após mudanças.

## Entregáveis

- Nova rota NR-1 renderizando todas as seções acima com identidade Bricer.
- Rota placeholder da LP para CTAs não quebrarem.
- Tokens de cor e fonte Poppins aplicados globalmente via `styles.css`.
- Imagem hero gerada e importada.