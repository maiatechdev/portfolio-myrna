# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dupla audiência, ambas igualmente prioritárias:

- **Avaliadores acadêmicos** — professores e banca do curso de Arquitetura e Urbanismo (Centro Universitário UNIME, Lauro de Freitas, BA), avaliando entregas de disciplina (ex.: orientação de Adriano Leal no Centro Cultural RUA).
- **Recrutadores e escritórios de arquitetura** — avaliando Ana Myrna Matos para estágio, emprego ou clientes freelance a partir do portfólio.

O site precisa servir bem os dois públicos ao mesmo tempo, sem favorecer um em detrimento do outro.

## Product Purpose

Portfólio pessoal de Ana Myrna Matos, estudante de Arquitetura e Urbanismo. Duas entregas: um site e um PDF de apresentação (baixável a partir do site). Sucesso = abrir oportunidade profissional real (estágio, emprego ou cliente freelance) — não só cumprir a entrega acadêmica.

## Positioning

O sistema visual nasce do próprio traço dela: um desenho à mão (planta baixa envolvendo a palavra PORTFÓLIO) definiu a paleta, a composição e o conceito gráfico do site, em vez de partir de um template genérico. O acervo de imagens é visualmente heterogêneo (renders noturnos, plantas técnicas, fotos de maquete) e isso vira estrutura deliberada — fundos claros/escuros alternando conforme o tipo de conteúdo — em vez de ser escondido ou uniformizado. Um escritório concorrente não replicaria isso sem copiar o traço dela.

## Operating Context

- Navegação em desktop e mobile, sessão de avaliação (rápida, primeira impressão) e sessão de leitura mais detida (avaliação técnica de projeto).
- Cliente única (Ana Myrna) publica projetos novos sozinha via Sanity, sem depender de desenvolvedor.
- PDF de apresentação como entrega companion, baixável pelo site.
- Contas de Instagram e LinkedIn linkadas a partir do site.

## Capabilities and Constraints

- Site estático (Astro + TypeScript), sem área logada, sem dados dinâmicos no cliente.
- CMS Sanity com dois tipos de conteúdo (`caseCompleto`, `estudoCurto`) de maturidade desigual — ver CLAUDE.md para o schema completo.
- Deploy na Vercel.
- Lighthouse acima de 95 em performance e SEO é requisito, não meta.
- Fontes self-hosted (`@fontsource`), zero chamada externa em runtime.
- Toda imagem passa pelo pipeline `astro:assets` (`<Picture>`/`<Image>`, `formats={['avif','webp']}`).
- **Conteúdo real hoje:** só o Centro Cultural RUA tem texto pronto. Os outros três projetos (Capilla de las Sombras, Limiar, Cozinha Safira) aguardam conteúdo da cliente — construir com placeholder em português, claramente marcado como tal no código, até o conteúdo final chegar. O site precisa ser demonstrável antes disso.
- Cozinha Safira: as 4 imagens atuais são colagens com várias vistas por arquivo — não usar até receber imagens separadas.
- Retratos da cliente: tons de vinho que brigam com a paleta — tratamento em P&B pendente de confirmação dela.

## Brand Commitments

- Tipografia: Jost (títulos/legendas, caixa alta, tracking largo — escolhida por ser próxima da Century Gothic que ela já usa nas pranchas) + Instrument Sans (corpo).
- Tokens de cor fixos: `--paper #F4F2ED`, `--sand #DED7C9`, `--ash #C4C1B8`, `--graphite #3A3A37`, `--ink #121211`, `--navy #1B2A4A` (navy de uso escasso e proposital).
- Minimalismo editorial: margens generosas e assimétricas, nada centralizado por padrão, imagens sangrando na borda, nunca duas imagens do mesmo tamanho lado a lado. O erro a evitar é parecer template de banco de imagens.
- "PORTFÓLIO" (empilhado POR/TFÓ/LIO) como wordmark central da identidade, ocupando o vazio de uma planta baixa — atualmente resolvido como imagem estática de fundo na hero (uma tentativa anterior de vetorizar e animar o desenho à mão da cliente foi feita e descartada por ficar ruim).

## Evidence on Hand

- **Centro Cultural RUA** (nov/2025): projeto completo — conceito, frase de abertura, programa, 9 renders, 9 capturas de modelo 3D, 6 pranchas técnicas (fonte em PDF vetorial, rasterizadas em PNG de 3000px via `scripts/converter-pranchas.mjs` — ver CLAUDE.md), apresentação de 9 páginas 16:9. Único projeto com texto final pronto.
- **Capilla de las Sombras** e **Limiar**: só fotos de maquete física, conteúdo textual pendente.
- **Cozinha Safira**: 4 imagens colagem, inutilizáveis até receber versões separadas.
- Acervo bruto (177 MB) em `Roteiro Portfólio/`, fora do controle de versão — ver CLAUDE.md para detalhes de pipeline.

## Product Principles

1. O acervo heterogêneo é ritmo estrutural (fundo `--ink` para render, `--paper` para planta/maquete), não um problema a disfarçar.
2. Nunca parecer template de banco de imagens — assimetria, sangria de borda, navy usado com escassez proposital.
3. O site funciona e é demonstrável antes do conteúdo final chegar; placeholder é sempre marcado como tal no código, nunca disfarçado de conteúdo real.
4. Performance e SEO (Lighthouse > 95) são requisito de entrega, não aspiração.
5. Dupla audiência simultânea: a apresentação precisa suportar tanto avaliação acadêmica detalhada quanto a primeira impressão rápida de um recrutador.

## Accessibility & Inclusion

Nenhum padrão específico além de boas práticas gerais (contraste, navegação por teclado, `prefers-reduced-motion` quando aplicável) foi estabelecido pela cliente até o momento.
