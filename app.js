/* CobraPauta — interações da landing.
 * Todos os dados abaixo são EXEMPLOS (nomes e partidos fictícios).
 * Na versão real, virão das fontes oficiais listadas na seção "De onde vêm os dados". */

const PAUTAS = [
  { id: 'celulares', nome: 'Furto e roubo de celulares', curto: 'Celulares' },
  { id: 'ia', nome: 'Marco legal da IA', curto: 'IA' },
  { id: 'enel', nome: 'Concessão da Enel em SP', curto: 'Enel em SP' },
  { id: 'educacao', nome: 'Educação básica', curto: 'Educação' },
  { id: 'minerais', nome: 'Minerais críticos e terras raras', curto: 'Minerais críticos' },
  { id: 'universidades', nome: 'Universidades e pesquisa', curto: 'Universidades' },
  { id: 'bets', nome: 'Publicidade de bets', curto: 'Bets' },
  { id: 'mulheres', nome: 'Direitos das mulheres', curto: 'Mulheres' },
  { id: 'lgbt', nome: 'Direitos LGBTQIA+', curto: 'LGBTQIA+' },
  { id: 'laico', nome: 'Estado laico', curto: 'Estado laico' },
  { id: 'moradia', nome: 'Moradia', curto: 'Moradia' },
  { id: 'alimentacao', nome: 'Alimentação', curto: 'Alimentação' },
];

const PESSOAS = [
  { nome: 'Lia Exemplar', cargo: 'Vereadora', partido: 'Partido A', uf: 'São Paulo (SP)', nivel: 'municipal', pauta: 'celulares', acao: 'Autora do PL fictício 101/2026' },
  { nome: 'Tiago Modelo', cargo: 'Deputado estadual', partido: 'Partido B', uf: 'SP', nivel: 'estadual', pauta: 'enel', acao: 'Presidiu CPI fictícia sobre a concessão' },
  { nome: 'André Simulado', cargo: 'Deputado federal', partido: 'Partido C', uf: 'SP', nivel: 'federal', pauta: 'minerais', acao: 'Relator do PL fictício 2.000/2026' },
  { nome: 'Alice Ilustra', cargo: 'Senadora', partido: 'Partido D', uf: 'SE', nivel: 'federal', pauta: 'bets', acao: 'Relatora do PL fictício 3.100/2026' },
  { nome: 'Bruno Teste', cargo: 'Deputado federal', partido: 'Partido E', uf: 'MG', nivel: 'federal', pauta: 'ia', acao: 'Coautor do PL fictício 4.200/2026' },
  { nome: 'Carla Amostra', cargo: 'Vereadora', partido: 'Partido F', uf: 'São Paulo (SP)', nivel: 'municipal', pauta: 'educacao', acao: 'Autora de 3 requerimentos fictícios' },
  { nome: 'Diego Protótipo', cargo: 'Deputado estadual', partido: 'Partido A', uf: 'SP', nivel: 'estadual', pauta: 'universidades', acao: 'Propôs emenda fictícia ao orçamento' },
  { nome: 'Elisa Rascunho', cargo: 'Deputada federal', partido: 'Partido G', uf: 'RJ', nivel: 'federal', pauta: 'mulheres', acao: 'Autora do PL fictício 5.050/2026' },
  { nome: 'Fábio Esboço', cargo: 'Vereador', partido: 'Partido H', uf: 'São Paulo (SP)', nivel: 'municipal', pauta: 'moradia', acao: 'Autor do PL fictício 220/2026' },
  { nome: 'Gabi Demonstra', cargo: 'Deputada estadual', partido: 'Partido B', uf: 'SP', nivel: 'estadual', pauta: 'alimentacao', acao: 'Relatora de projeto fictício na Alesp' },
  { nome: 'Hugo Hipótese', cargo: 'Senador', partido: 'Partido C', uf: 'BA', nivel: 'federal', pauta: 'laico', acao: 'Apresentou PEC fictícia 01/2026' },
  { nome: 'Íris Provisória', cargo: 'Deputada federal', partido: 'Partido F', uf: 'PE', nivel: 'federal', pauta: 'lgbt', acao: 'Autora do PL fictício 6.600/2026' },
  { nome: 'Júlia Figurante', cargo: 'Deputada estadual', partido: 'Partido I', uf: 'SP', nivel: 'estadual', pauta: 'celulares', acao: 'Autora de indicação fictícia à SSP' },
];

const RANKING = [
  { nome: 'Helena Exemplo', cargo: 'Deputada federal', partido: 'Partido A', projetos: 14, aprov: 5, pl: 'PL fictício 0000/2026', etapa: 2 },
  { nome: 'Marcos Modelo', cargo: 'Senador', partido: 'Partido B', projetos: 11, aprov: 4, pl: 'PL fictício 0001/2026', etapa: 3 },
  { nome: 'Paula Fictícia', cargo: 'Deputada estadual', partido: 'Partido C', projetos: 9, aprov: 3, pl: 'PL fictício 0002/2026', etapa: 1 },
  { nome: 'Otávio Simulado', cargo: 'Vereador', partido: 'Partido D', projetos: 6, aprov: 2, pl: 'PL fictício 0003/2026', etapa: 4 },
  { nome: 'Renata Ilustra', cargo: 'Deputada federal', partido: 'Partido E', projetos: 4, aprov: 1, pl: 'PL fictício 0004/2026', etapa: 0 },
];

const ETAPAS = [
  { t: 'Projeto apresentado', d: '03 mar 2026' },
  { t: 'Relatoria designada', d: '18 mar 2026' },
  { t: 'Em análise na Comissão de Segurança Pública', d: 'desde 09 abr 2026 · aguardando parecer' },
  { t: 'Votação na comissão', d: '' },
  { t: 'Plenário', d: '' },
  { t: 'Senado e sanção', d: '' },
];

const state = {
  selecionadas: new Set(['celulares', 'enel', 'minerais', 'bets']),
  nivel: 'todas',
  rank: 0,
};

const $ = (s, el = document) => el.querySelector(s);
const iniciais = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- Passo 1: pautas ---------- */
function renderPautas() {
  const box = $('#pautaChips');
  box.innerHTML = PAUTAS.map((p) => {
    const on = state.selecionadas.has(p.id);
    return `<button class="chip${on ? ' is-on' : ''}" data-id="${p.id}" aria-pressed="${on}">${esc(p.nome)}</button>`;
  }).join('');
  const n = state.selecionadas.size;
  $('#pautaCount').textContent = `${n} selecionada${n === 1 ? '' : 's'}`;
}

$('#pautaChips').addEventListener('click', (e) => {
  const b = e.target.closest('.chip');
  if (!b) return;
  const id = b.dataset.id;
  state.selecionadas.has(id) ? state.selecionadas.delete(id) : state.selecionadas.add(id);
  renderPautas();
  renderPessoas();
  renderAskOptions();
});

/* ---------- Passo 2: pessoas ---------- */
function renderPessoas() {
  const lista = PESSOAS.filter((p) =>
    state.selecionadas.has(p.pauta) && (state.nivel === 'todas' || p.nivel === state.nivel));
  $('#peopleCount').textContent = `${lista.length} pessoa${lista.length === 1 ? '' : 's'}`;
  const ul = $('#peopleList');
  if (!lista.length) {
    ul.innerHTML = `<li class="empty">${state.selecionadas.size
      ? 'Nenhuma pessoa nesta esfera para as pautas escolhidas.'
      : 'Selecione ao menos uma pauta no passo 1 para ver quem a defende.'}</li>`;
    return;
  }
  const curto = Object.fromEntries(PAUTAS.map((p) => [p.id, p.curto]));
  ul.innerHTML = lista.map((p, i) => `
    <li class="person" style="animation-delay:${i * 40}ms">
      <span class="avatar" aria-hidden="true">${iniciais(p.nome)}</span>
      <div>
        <h4>${esc(p.nome)}</h4>
        <div class="person__role">${esc(p.cargo)} · ${esc(p.partido)} · ${esc(p.uf)}</div>
        <div class="person__act">${esc(p.acao)}</div>
      </div>
      <span class="tag">${esc(curto[p.pauta])}</span>
    </li>`).join('');
}

document.querySelector('.refine').addEventListener('click', (e) => {
  const b = e.target.closest('[data-level]');
  if (!b) return;
  state.nivel = b.dataset.level;
  document.querySelectorAll('.refine .chip').forEach((c) => c.classList.toggle('is-on', c === b));
  renderPessoas();
});

/* ---------- Ranking + linha do tempo ---------- */
function renderRanking() {
  const max = Math.max(...RANKING.map((r) => r.projetos));
  $('#ranking-list').innerHTML = RANKING.map((r, i) => `
    <li><button class="rank${i === state.rank ? ' is-on' : ''}" data-i="${i}" aria-pressed="${i === state.rank}">
      <span class="rank__pos">${i + 1}</span>
      <span class="avatar" aria-hidden="true">${iniciais(r.nome)}</span>
      <span><span class="rank__name">${esc(r.nome)}</span><span class="rank__role">${esc(r.cargo)} · ${esc(r.partido)}</span></span>
      <span class="bar"><i data-w="${(r.projetos / max) * 100}"></i></span>
      <span class="rank__num"><b>${r.projetos}</b><small>${r.aprov} aprov.</small></span>
    </button></li>`).join('');
}

function renderTimeline() {
  const r = RANKING[state.rank];
  $('#tlCode').textContent = r.pl;
  $('#tlAuthor').innerHTML = `<span class="avatar" aria-hidden="true">${iniciais(r.nome)}</span>
    <div><b>${esc(r.nome)}</b><span>${esc(r.cargo)} · ${esc(r.partido)}</span></div>`;
  $('#timeline').innerHTML = ETAPAS.map((e, i) => {
    const cls = i < r.etapa ? 'done' : i === r.etapa ? 'now' : 'todo';
    let sub = '';
    if (cls === 'done' && e.d) sub = `<small>${e.d}</small>`;
    if (cls === 'now') sub = `<span class="here">você está aqui</span><br><small>${e.d || 'em andamento'}</small>`;
    if (i === r.etapa + 1) sub = '<small>próxima etapa</small>';
    return `<li class="${cls}"><span class="dot" aria-hidden="true"></span><b>${e.t}</b>${sub}</li>`;
  }).join('');
}

function animateBars() {
  document.querySelectorAll('.bar i').forEach((i) => { i.style.width = i.dataset.w + '%'; });
}

$('#ranking-list').addEventListener('click', (e) => {
  const b = e.target.closest('.rank');
  if (!b) return;
  state.rank = Number(b.dataset.i);
  document.querySelectorAll('.rank').forEach((el, i) => {
    el.classList.toggle('is-on', i === state.rank);
    el.setAttribute('aria-pressed', i === state.rank);
  });
  renderTimeline();
});

/* ---------- Mensagem pronta ---------- */
function renderAskOptions() {
  const sel = $('#askPauta');
  const opts = PAUTAS.filter((p) => state.selecionadas.size === 0 || state.selecionadas.has(p.id));
  sel.innerHTML = opts.map((p) => `<option value="${p.id}">${esc(p.nome)}</option>`).join('');
  fillAsk();
}
function fillAsk() {
  const p = PAUTAS.find((x) => x.id === $('#askPauta').value) || PAUTAS[0];
  $('#askText').value =
`Prezado(a) parlamentar,

Sou eleitor(a) e acompanho a pauta "${p.nome}" pelo CobraPauta.

Gostaria de saber quais iniciativas seu mandato pretende apresentar ou apoiar para avançar essa pauta, e qual o próximo passo previsto.

Agradeço o retorno e seguirei acompanhando as atualizações.

Atenciosamente,`;
}
$('#askPauta').addEventListener('change', fillAsk);
$('#openAsk').addEventListener('click', () => {
  const d = $('#askModal');
  if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', '');
});
$('#copyAsk').addEventListener('click', async (e) => {
  const btn = e.currentTarget;
  try {
    await navigator.clipboard.writeText($('#askText').value);
    btn.textContent = 'Copiada!';
  } catch {
    $('#askText').select();
    btn.textContent = 'Selecionada — use Ctrl+C';
  }
  setTimeout(() => { btn.textContent = 'Copiar mensagem'; }, 1800);
});

/* ---------- Nav ---------- */
const toggle = $('.nav__toggle');
const menu = $('#menu');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', open);
  menu.classList.toggle('is-open', open);
});
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); }
});
const nav = $('.nav');
window.addEventListener('scroll', () => nav.classList.toggle('is-scrolled', window.scrollY > 8), { passive: true });

/* ---------- Init ---------- */
renderPautas();
renderPessoas();
renderRanking();
renderTimeline();
renderAskOptions();

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    if (entries.some((en) => en.isIntersecting)) { animateBars(); io.disconnect(); }
  }, { threshold: 0.3 });
  io.observe($('#ranking'));
} else {
  animateBars();
}
