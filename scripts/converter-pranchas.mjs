// Rasteriza as pranchas tecnicas (PDF vetorial de verdade) do Centro Cultural
// RUA em PNG de alta resolucao, prontas para o pipeline de imagem do Astro
// (astro:assets gera AVIF/WebP a partir daqui). Ver CLAUDE.md, "Primeira tarefa".
// Uso: node scripts/converter-pranchas.mjs
//
// Decisao: a ideia original era exportar SVG vetorial de verdade para animar o
// traco ao rolar. Descartada pela mesma razao que a animacao da hero foi
// descartada (ficou ruim/complexo demais pro ganho) — e na pratica o SVGO
// travava (RangeError de recursao) e ainda saia pesado (0.5-2.5 MB por
// prancha) num desenho tecnico denso. Rasterizar em alta resolucao e mais
// simples, mais rapido, e reaproveita o mesmo pipeline <Picture> da hero.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import * as mupdf from 'mupdf';

const SRC_DIR = 'Roteiro Portfólio/Projetos/Centro Cultural RUA';
const OUT_DIR = 'src/assets/pranchas';
// Largura alvo generosa: pranchas tecnicas pedem zoom para ler cotas/legendas.
const TARGET_WIDTH_PX = 3000;

// As 6 pranchas citadas no CLAUDE.md: situacao, layout, terreo, superior, corte, fachada.
const PRANCHAS = [
	{ arquivo: 'Planta situação oficial [RUA].pdf', slug: 'situacao', titulo: 'Situação' },
	{ arquivo: 'Planta Layout oficial [RUA].pdf', slug: 'layout', titulo: 'Layout' },
	{ arquivo: 'Planta técinica térreo oficial [RUA].pdf', slug: 'terreo', titulo: 'Térreo' },
	{ arquivo: 'Planta técnica superior oficial [RUA].pdf', slug: 'superior', titulo: 'Superior' },
	{ arquivo: 'Planta Corte oficial [RUA].pdf', slug: 'corte', titulo: 'Corte' },
	{ arquivo: 'Planta Fachada oficial [RUA].pdf', slug: 'fachada', titulo: 'Fachada' },
];

mkdirSync(OUT_DIR, { recursive: true });

const falhas = [];

for (const { arquivo, slug, titulo } of PRANCHAS) {
	try {
		const path = join(SRC_DIR, arquivo);
		const data = readFileSync(path);
		const doc = mupdf.Document.openDocument(data, 'application/pdf');
		const page = doc.loadPage(0);

		const [x0, , x1] = page.getBounds();
		const scale = TARGET_WIDTH_PX / (x1 - x0);
		const matrix = mupdf.Matrix.scale(scale, scale);

		const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
		const png = pixmap.asPNG();

		const outPath = join(OUT_DIR, `${slug}.png`);
		writeFileSync(outPath, png);

		const antes = (data.length / 1024 / 1024).toFixed(2);
		const depois = (png.length / 1024 / 1024).toFixed(2);
		console.log(`OK: ${outPath} — ${titulo} (${pixmap.getWidth()}x${pixmap.getHeight()}, PDF ${antes} MB -> PNG ${depois} MB)`);
	} catch (err) {
		console.error(`FALHOU: ${titulo} (${arquivo}) — ${err.message}`);
		falhas.push(titulo);
	}
}

if (falhas.length > 0) {
	console.error(`\n${falhas.length} prancha(s) falharam: ${falhas.join(', ')}`);
	process.exitCode = 1;
}
