# Portfólio Ana Myrna Matos

Cole isto como `CLAUDE.md` na raiz do repositório. Serve como contexto permanente do projeto e como prompt de abertura.

---

## O que é

Portfólio de uma estudante de Arquitetura e Urbanismo (Centro Universitário UNIME, Lauro de Freitas, BA). Duas entregas: um PDF de apresentação e um site. Cliente única, projeto pequeno, sem área logada e sem dados dinâmicos.

## Stack decidida

- **Astro** com TypeScript. Zero JS por padrão, `astro:assets` para o pipeline de imagem, View Transitions para as animações de página.
- **Sanity** como CMS, para ela publicar projetos novos sozinha.
- Deploy na **Vercel**.
- Sem Tailwind. CSS puro com custom properties, porque o sistema visual é pequeno e específico.

## Direção visual

Minimalismo editorial. Imagens grandes, margens generosas e assimétricas, nada centralizado por padrão. O erro a evitar é parecer template de banco de imagem.

### Tokens

```css
--paper:    #F4F2ED;  /* fundo padrão */
--sand:     #DED7C9;  /* blocos de apoio */
--ash:      #C4C1B8;  /* linhas e tipografia rebaixada */
--graphite: #3A3A37;  /* texto corrente */
--ink:      #121211;  /* fundo das seções escuras */
--navy:     #1B2A4A;  /* acento, uso escasso e proposital */
```

Tipografia: **Jost** para títulos e legendas (caixa alta, `letter-spacing` entre 0.12em e 0.2em), **Instrument Sans** para corpo. Jost foi escolhida por ser próxima da Century Gothic que ela já usa nas pranchas.

### Ritmo de fundo

O acervo é visualmente heterogêneo e isso vira estrutura em vez de acidente:

- Seções de **render** (noturnos, escuros): fundo `--ink`.
- Seções de **maquete, planta e diagrama**: fundo `--paper`.
- O contraste entre elas é o ritmo da página.

### Regras antitemplate

- Nunca duas imagens de mesmo tamanho lado a lado.
- Pelo menos uma imagem sangrando na borda por projeto.
- Legendas técnicas em caixa alta, 10px, tracking largo.
- O navy aparece pouco: uma linha, um marcador, os links. Presença notável vem de escassez.

## A capa

Ela desenhou à mão uma planta baixa envolvendo a palavra PORTFÓLIO empilhada em três linhas (POR / TFÓ / LIO), com a tipografia ocupando o vazio da planta como se fosse um pátio.

**Decisão revista:** a ideia original era vetorizar o desenho à mão e animar o traço se desenhando (`stroke-dasharray`). Foi tentado e descartado — o resultado ficou ruim. Abordagem atual, mais simples: uma foto/print de planta baixa (`src/assets/hero-planta.png`, via `Roteiro Portfólio/Fotos/hero.png`) como imagem de fundo estática da hero, com "PORTFÓLIO" (POR/TFÓ/LIO) em Jost sobreposto no vazio da planta, sem animação de traço. Ver [Hero.astro](src/components/Hero.astro).

## Modelo de conteúdo (Sanity)

Dois tipos, porque os projetos têm maturidade muito desigual:

**`caseCompleto`** — hoje só o Centro Cultural RUA. Campos: título, subtítulo, frase de abertura, ano, disciplina, instituição, orientação, autoria, localização, área do terreno, área construída, programa (array por pavimento), conceito, partido, processo, conclusão, palavras-chave, galeria de imagens com legenda, pranchas técnicas (imagem rasterizada — ver "Acervo real"), ordem.

**`estudoCurto`** — Capilla de las Sombras, Limiar e cozinha Safira. Campos: título, tipo (maquete / interiores), ano, disciplina, autoria, obra original e autor original (opcionais, para releituras), frase de abertura, texto único de 3 a 4 frases, galeria, ordem.

Mais: um singleton `sobre` (bio, foto, mini currículo, contatos, links) e `configuracoes` (SEO, URL do PDF para download).

## Estrutura do site

- `/` — hero com a capa (imagem estática), índice dos projetos com imagem e dados básicos.
- `/projetos/[slug]` — página do projeto, layout diferente por tipo de conteúdo.
- `/sobre` — retrato, apresentação, mini currículo, contatos, botão de download do PDF.

Requisitos do briefing: responsivo, SEO, carregamento rápido, imagens otimizadas, botão de download do PDF, links para Instagram e LinkedIn.

## Acervo real

Está em `Roteiro Portfólio/`. Números que importam para o pipeline de imagem: 177 MB brutos, PNGs de até 2,6 MB.

**Centro Cultural RUA** (nov/2025, orientação de Adriano Leal, terreno de 1.762 m² em frente ao Terminal Aeroporto de Lauro de Freitas). Conceito: "a cidade entra e a arte sai". Frase de abertura: "onde o concreto fala, a arte responde".
- 9 renders, 9 capturas do modelo 3D, apresentação de 9 páginas em 16:9.
- 6 pranchas em PDF vetorial (situação, layout, térreo, superior, corte, fachada) em `Roteiro Portfólio/Projetos/Centro Cultural RUA/`. **Decisão revista:** a ideia original era exportar como SVG e animar o traço ao rolar — mesmo raciocínio da capa, descartado pelo mesmo motivo (complexidade sem ganho real, e o SVGO trava/faz arquivo pesado num desenho técnico tão denso). Abordagem atual: `scripts/converter-pranchas.mjs` rasteriza cada PDF via `mupdf` em PNG de 3000px de largura (`src/assets/pranchas/*.png`), que entra no pipeline normal `astro:assets`/`<Picture>` (AVIF/WebP). Zoom seguinte ainda fica legível; não é vetor de verdade.
- Ignorar o arquivo `.rte` de 95 MB, é do Revit.

**Capilla de las Sombras** e **Limiar**: só fotos de maquete física. Conteúdo textual pendente.

**Cozinha Safira**: os 4 PNGs são colagens com várias vistas dentro de cada arquivo. Não usar até receber as imagens separadas.

**Retratos**: 3 fotos em tons de vinho, que brigam com a paleta. Tratar em preto e branco (pendente de confirmação dela).

## Estado do conteúdo

Só o Centro Cultural RUA tem texto pronto. Os outros três estão aguardando a cliente. **Construir com dados de exemplo em português nos três estudos curtos e deixar claro no código o que é placeholder.** O site precisa funcionar e ser demonstrável antes de o conteúdo chegar.

## Primeira tarefa

1. Scaffold do Astro com TypeScript e a estrutura de rotas acima.
2. Tokens de CSS e fontes carregadas localmente (`@fontsource`), sem chamada externa em runtime.
3. ~~Vetorizar a capa~~ — feito e descartado (ver "A capa"). Componente do hero usa imagem estática.
4. ~~Converter pranchas em SVG~~ — feito e descartado (ver "Acervo real"). `scripts/converter-pranchas.mjs` rasteriza em PNG em vez disso.

Só depois disso: schemas do Sanity e páginas de projeto.

## Como trabalhar aqui

- Ao subir o dev server, usar modo background: `astro dev --background`. Gerenciar com `astro dev stop`, `astro dev status`, `astro dev logs`.
- Commits pequenos, um assunto por commit.
- Nada de biblioteca de animação. CSS e a Web Animations API dão conta.
- Toda imagem passa pelo `<Image />` do Astro com `widths` e `formats={['avif','webp']}`.
- Antes de adicionar qualquer dependência, verificar se resolve sem ela.
- Lighthouse acima de 95 em performance e SEO é requisito, não meta.
