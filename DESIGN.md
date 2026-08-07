---
name: Portfólio Ana Myrna Matos
description: Portfólio editorial de arquitetura construído a partir do próprio traço técnico da autora
colors:
  paper: "#f4f2ed"
  sand: "#ded7c9"
  ash: "#c4c1b8"
  graphite: "#3a3a37"
  ink: "#121211"
  navy: "#1b2a4a"
typography:
  display:
    fontFamily: "Jost, sans-serif"
    fontWeight: 400
    letterSpacing: "0.14em"
  display-hero:
    fontFamily: "Jost, sans-serif"
    fontSize: "clamp(1.6rem, 5vw, 4rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "0.05em"
  display-titulo:
    fontFamily: "Jost, sans-serif"
    fontSize: "clamp(2rem, 6vw, 4rem)"
    fontWeight: 500
    letterSpacing: "0.05em"
  legenda:
    fontFamily: "Jost, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.14em"
  legenda-frase:
    fontFamily: "Jost, sans-serif"
    fontSize: "clamp(1rem, 2.2vw, 1.5rem)"
    letterSpacing: "0.1em"
  cta:
    fontFamily: "Jost, sans-serif"
    fontSize: "0.8rem"
    letterSpacing: "0.14em"
  body:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
components:
  hero:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    typography: "{typography.display-hero}"
---

# Design System: Portfólio Ana Myrna Matos

## Overview

**Creative North Star: "A Prancheta Editorial"**

O sistema cruza o vocabulário de uma prancha técnica de arquitetura com o de uma publicação editorial. Nada é ilustração genérica: a capa do site é uma planta baixa real, desenhada à mão pela própria autora, com a palavra PORTFÓLIO ocupando o vazio do desenho como se fosse um pátio. Tipografia funciona como anotação de prancha — caixa alta, tracking largo, discreta — e a cor é usada como se fosse instrumento de desenho técnico: grafite para o traço, papel para o fundo, navy só onde uma prancheta real usaria uma linha de destaque.

O erro a evitar, nomeado explicitamente pelo projeto, é parecer template de banco de imagens. Presença visual vem de escassez (o navy aparece pouco: uma linha, um marcador, os links) e de assimetria proposital, nunca de decoração.

**Key Characteristics:**
- Traço técnico real como identidade gráfica, não ilustração genérica
- Tipografia-legenda: caixa alta, tracking largo, discreta
- Cor por escassez: neutros dominam, navy é raro e proposital
- Sem sombra, sem raio de borda — superfícies planas, silhueta retilínea
- Acervo fotográfico heterogêneo (render noturno vs. planta técnica) tratado como ritmo estrutural, não como problema a esconder

## Colors

Paleta quase monocromática — uma escala de neutros do papel à tinta — com um único acento de cor usado por escassez proposital.

### Primary
- **Navy de Prancheta** (`#1b2a4a`): o único acento de cor do sistema. Reservado para uma linha, um marcador, um link — nunca para preenchimento de área. Presença notável vem justamente da raridade.

### Neutral
- **Papel** (`#f4f2ed`): fundo padrão das seções claras (planta, maquete, diagrama).
- **Areia** (`#ded7c9`): blocos de apoio sobre o papel — nunca fundo de página inteira.
- **Cinza Rebaixado** (`#c4c1b8`): linhas finas e tipografia secundária/rebaixada.
- **Grafite** (`#3a3a37`): cor do texto corrente e do traço principal — a "cor do lápis" do sistema.
- **Tinta** (`#121211`): fundo das seções escuras (renders noturnos).

### Named Rules
**The Scarcity Rule.** O navy aparece em, no máximo, um elemento por composição — uma linha, um marcador, um link. Presença vem de raridade, não de repetição.

**The Ink/Paper Rhythm Rule.** O acervo é visualmente heterogêneo (render noturno vs. planta técnica) e isso vira estrutura: seções de render usam fundo `tinta`, seções de planta/maquete/diagrama usam fundo `papel`. O contraste entre as duas é o ritmo da página — nunca uniformizar tudo para uma cor de fundo só.

## Typography

**Display Font:** Jost (com fallback `sans-serif`)
**Body Font:** Instrument Sans (com fallback `sans-serif`)

**Character:** Jost foi escolhida por ficar perto da Century Gothic que a autora já usa nas próprias pranchas técnicas — a tipografia do site cita a tipografia dela no papel. Em caixa alta e tracking largo, Jost lê como legenda/anotação técnica, não como título editorial comum. Instrument Sans carrega o corpo de texto sem competir com isso.

### Hierarchy
- **Display — uso geral** (peso 400, `text-transform: uppercase`, tracking 0.14em): aplicado a todo h1–h4 por padrão — títulos de seção sem tamanho fixo (herdam o tamanho padrão do navegador para cada nível).
- **Display — hero** (peso 500, `clamp(1.6rem, 5vw, 4rem)`, line-height 0.92, tracking 0.05em): variante específica do wordmark "PORTFÓLIO" empilhado (POR/TFÓ/LIO) na hero da home — tracking mais fechado que o padrão porque a palavra já está partida em três linhas.
- **Display — título de projeto** (peso 500, `clamp(2rem, 6vw, 4rem)`, tracking 0.05em): título de página de projeto (ex.: "Centro Cultural RUA"). Mesma família da hero, mas limite inferior maior — é uma única linha corrida, não três palavras empilhadas num vazio apertado.
- **Legenda** (peso 400, 10px, tracking 0.14em, caixa alta): legenda técnica de imagem — a peça mais reduzida da escala, para créditos/descrição de figura.
- **Legenda — frase de abertura** (`clamp(1rem, 2.2vw, 1.5rem)`, tracking 0.1em, caixa alta): frase de efeito sobreposta à imagem de abertura de um projeto (ex.: "onde o concreto fala, a arte responde") — maior que a legenda técnica porque é a única linha da composição, não uma legenda de apoio.
- **CTA** (0.8rem, tracking 0.14em, caixa alta, sublinhado): rótulo de link/ação (baixar PDF, contato). Deliberadamente maior que a legenda técnica — é acionável, precisa de alvo de toque confiável.
- **Body** (peso 400, 16px, line-height 1.5): texto corrente. Pesos 500 e 600 carregados para ênfase, ainda sem uso confirmado em componente. Parágrafos editoriais longos (conceito/partido) usam line-height 1.7 no lugar de 1.5 — texto mais respirado para leitura longa — mas mantêm o mesmo tamanho de 16px, não é um passo novo na escala.

### Named Rules
**The Legenda Rule.** Qualquer texto em Jost é caixa alta com tracking largo (0.12–0.2em) — é sempre "legenda de prancha", nunca título decorativo. Se o texto não deveria ler como anotação técnica, ele não vai em Jost.

## Layout

Ainda inicial: hoje só a hero está implementada. É uma seção full-bleed com `aspect-ratio: 1536 / 1024` (a proporção da imagem de fundo), sem grid ou container definidos no código ainda. O dimensionamento é fluido via `clamp()` e porcentagem, não breakpoints fixos.

A direção confirmada para o restante do site (CLAUDE.md): margens generosas e assimétricas, nada centralizado por padrão, pelo menos uma imagem sangrando na borda por projeto, nunca duas imagens do mesmo tamanho lado a lado. Nenhum desses valores tem implementação de referência ainda — são invariantes a respeitar quando as próximas seções forem construídas, não medidas observadas.

## Elevation & Depth

Sistema inteiramente plano — nenhuma `box-shadow` existe no código. Profundidade não é transmitida por sombra ou elevação, e sim pelo contraste de fundo entre seções (ver The Ink/Paper Rhythm Rule): uma seção de fundo `tinta` ao lado de uma de fundo `papel` já cria a separação que outro sistema resolveria com sombra.

### Named Rules
**The Flat-By-Default Rule.** Nenhuma superfície recebe sombra. Se uma seção precisa se destacar da vizinha, o recurso é trocar `tinta`↔`papel`, não adicionar profundidade.

## Shapes

Nenhum `border-radius` existe no código — cantos são sempre retos. Nenhuma borda decorativa também. A silhueta é inteiramente retilínea, coerente com o vocabulário de desenho técnico/prancha que rege o sistema: nada aqui deveria parecer "app", tudo deveria parecer desenho impresso.

## Components

### Hero (componente-assinatura)
A única peça de UI implementada além dos tokens globais. Uma imagem de planta baixa (foto/print real, não ilustração) ocupa 100% da largura como fundo (`object-fit: cover`, proporção nativa `1536/1024`), e o wordmark "PORTFÓLIO" — quebrado em três linhas empilhadas POR/TFÓ/LIO — fica posicionado em absoluto sobre o vazio da planta (`left: 29%; top: 34%; width: 32%`), em Jost peso 500, cor `grafite`, sem nenhum tratamento de legibilidade adicional (sem scrim, sem sombra de texto) porque a área escolhida da planta já é um vazio limpo.

Decisão de processo relevante: a primeira versão tentava vetorizar um desenho à mão da cliente e animar o traço se desenhando (`stroke-dasharray`). Foi implementada e descartada por ficar visualmente ruim — a versão atual é deliberadamente estática e usa uma foto de planta real em vez de um desenho vetorizado.

## Do's and Don'ts

### Do:
- **Do** usar `tinta` e `papel` como os dois únicos fundos de seção; a alternância entre eles é o ritmo da página (The Ink/Paper Rhythm Rule).
- **Do** reservar Jost para texto que deveria ler como legenda técnica — caixa alta, tracking 0.12–0.2em (The Legenda Rule).
- **Do** manter toda imagem passando pelo pipeline `astro:assets` (`<Picture>`/`<Image>`, `formats={['avif','webp']}`), como a Hero já faz.
- **Do** manter cantos retos e superfícies planas — zero `border-radius`, zero `box-shadow` — em qualquer componente novo.

### Don't:
- **Don't** usar navy em área preenchida ou em mais de um elemento por composição (The Scarcity Rule).
- **Don't** colocar duas imagens do mesmo tamanho lado a lado, nem centralizar layout por padrão — vira template de banco de imagens, o erro que o projeto nomeia explicitamente para evitar.
- **Don't** reintroduzir animação de traço/vetorização da capa — já foi tentado e descartado.
- **Don't** adicionar biblioteca de animação; CSS e a Web Animations API já eram considerados suficientes quando animação foi cogitada.
