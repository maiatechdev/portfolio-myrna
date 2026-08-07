// Conteudo real do Centro Cultural RUA (unico projeto com texto pronto — ver
// PRODUCT.md). Hardcoded por enquanto: o schema do Sanity ainda nao existe
// (ver CLAUDE.md, "Primeira tarefa" — schemas do Sanity vem depois).
//
// Conceito e partido adaptados de "Estudo de partido Centro Cultural.pdf"
// (formato academico -> formato de site). Processo e conclusao ficam de fora
// por enquanto: nao existe texto final pra essas secoes ainda (a apresentacao
// fonte ainda tem Lorem Ipsum nesses pontos).

import render01 from '../assets/rua/renders/render-01.png';
import render02 from '../assets/rua/renders/render-02.png';
import render03 from '../assets/rua/renders/render-03.png';
import render04 from '../assets/rua/renders/render-04.png';
import render05 from '../assets/rua/renders/render-05.jpg';
import render06 from '../assets/rua/renders/render-06.jpg';
import render07 from '../assets/rua/renders/render-07-grafite.jpg';
import render08 from '../assets/rua/renders/render-08.png';
import render09 from '../assets/rua/renders/render-09.png';

import captura01 from '../assets/rua/capturas/captura-01.png';
import captura02 from '../assets/rua/capturas/captura-02.png';
import captura03 from '../assets/rua/capturas/captura-03.png';
import captura04 from '../assets/rua/capturas/captura-04.png';
import captura05 from '../assets/rua/capturas/captura-05.png';
import captura06 from '../assets/rua/capturas/captura-06.png';
import captura07 from '../assets/rua/capturas/captura-07.png';
import captura08 from '../assets/rua/capturas/captura-08.png';
import captura09 from '../assets/rua/capturas/captura-09.png';

import prancaSituacao from '../assets/pranchas/situacao.png';
import prancaLayout from '../assets/pranchas/layout.png';
import prancaTerreo from '../assets/pranchas/terreo.png';
import prancaSuperior from '../assets/pranchas/superior.png';
import prancaCorte from '../assets/pranchas/corte.png';
import prancaFachada from '../assets/pranchas/fachada.png';

export const rua = {
	slug: 'centro-cultural-rua',
	titulo: 'Centro Cultural RUA',
	subtitulo: 'Rede Urbana de Arte',
	fraseDeAbertura: 'onde o concreto fala, a arte responde',

	metadados: {
		ano: '2025',
		disciplina: 'Ateliê de Projeto de Arquitetura Cultural',
		instituicao: 'Centro Universitário UNIME',
		orientacao: 'Adriano Leal',
		autoria: 'Ana Myrna Matos',
		localizacao: 'R. Dr. Gerino de Souza Filho, 105 — Centro, Lauro de Freitas, BA',
		areaDoTerreno: '1.762 m²',
	},

	conceito:
		'O Centro Cultural de Arte Urbana nasce da ideia de que a cidade é palco vivo de expressões artísticas coletivas, onde muros, praças e ruas se transformam em suportes de criatividade. O conceito orientador é a apropriação do espaço como manifesto, traduzindo na arquitetura a liberdade, a diversidade e o movimento presentes na arte urbana — um edifício pensado como extensão da cidade: aberto, dinâmico e permeável.',

	partido:
		'O partido adota abertura e fluidez como princípios fundamentais, dissolvendo os limites entre espaço público e privado. A volumetria, em blocos sobrepostos e conectados por rampas, remete ao dinamismo urbano. Concreto, aço e vidro servem de base neutra para as intervenções artísticas — o edifício não apenas abriga a arte urbana, mas a incorpora como linguagem arquitetônica.',

	programa: [
		{ pavimento: 'Térreo', uso: 'Praça cultural aberta' },
		{ pavimento: 'Pavimentos intermediários', uso: 'Oficinas e estúdios' },
		{ pavimento: 'Níveis superiores', uso: 'Galerias, auditório e mirante urbano' },
	],

	renders: [
		{ imagem: render01, legenda: 'Vista noturna — acesso principal' },
		{ imagem: render02, legenda: 'Vista noturna — pátio e estacionamento' },
		{ imagem: render03, legenda: 'Render 3' },
		{ imagem: render04, legenda: 'Render 4' },
		{ imagem: render05, legenda: 'Render 5' },
		{ imagem: render06, legenda: 'Render 6' },
		{ imagem: render07, legenda: 'Estudo em grafite' },
		{ imagem: render08, legenda: 'Render 8' },
		{ imagem: render09, legenda: 'Render 9' },
	],

	capturas: [
		{ imagem: captura01, legenda: 'Modelo 3D — 01' },
		{ imagem: captura02, legenda: 'Modelo 3D — 02' },
		{ imagem: captura03, legenda: 'Modelo 3D — 03' },
		{ imagem: captura04, legenda: 'Modelo 3D — 04' },
		{ imagem: captura05, legenda: 'Modelo 3D — 05' },
		{ imagem: captura06, legenda: 'Modelo 3D — 06' },
		{ imagem: captura07, legenda: 'Modelo 3D — 07' },
		{ imagem: captura08, legenda: 'Modelo 3D — 08' },
		{ imagem: captura09, legenda: 'Modelo 3D — 09' },
	],

	pranchas: [
		{ imagem: prancaSituacao, legenda: 'Situação' },
		{ imagem: prancaLayout, legenda: 'Layout' },
		{ imagem: prancaTerreo, legenda: 'Planta técnica — térreo' },
		{ imagem: prancaSuperior, legenda: 'Planta técnica — superior' },
		{ imagem: prancaCorte, legenda: 'Corte' },
		{ imagem: prancaFachada, legenda: 'Fachada' },
	],

	// TODO: URL real do PDF de apresentação — pendente (ver "configuracoes" no CLAUDE.md).
	pdfUrl: '#',
};

export type Rua = typeof rua;
