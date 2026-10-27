// script.js - arquivo principal, importa todos os outros
import { assets, preloadAssets } from './scriptAssets.js';
import { renderHistoria, renderTecnologias } from './scriptDetails.js';
import { renderProjetos, getProjetoDetalhes } from './scriptProjects.js';

const sections = ['inicio','sobre','historia','tecnologias','portfolio','contatos'];
let current = 'inicio';

// Inicialização
preloadAssets();
renderHistoria();
renderTecnologias();
renderProjetos();

// Injetar imagens nos lugares corretos
function injectImages(){
  // logo header e footer
  document.querySelectorAll('[data-img="logo"]').forEach(img=>{
    img.src = assets.logoBL;
  });
  // hero city
  const hero = document.getElementById('hero-img');
  if(hero) hero.src = assets.heroCity;
  
  const avatar = document.getElementById('avatar-img');
  if(avatar) avatar.src = assets.heroCity;

  const timelineImg = document.getElementById('timeline-img');
  if(timelineImg) timelineImg.src = assets.timelineIcons;

  const techImg = document.getElementById('tech-ref-img');
  if(techImg) techImg.src = assets.techRef;

  const projImg = document.getElementById('projects-img');
  if(projImg) projImg.src = assets.projectsIcons;

  const springImg = document.getElementById('spring-img');
  if(springImg) springImg.src = assets.springBoot;

  const footerLogo = document.getElementById('footer-logo');
  if(footerLogo) footerLogo.src = assets.logoBL;
}
injectImages();

// Header scroll + nav ativo
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 20) header.classList.add('scrolled');
  else header.classList.remove('scrolled');

  let active = 'inicio';
  for(let id of sections){
    const el = document.getElementById(id);
    if(!el) continue;
    if(window.scrollY >= el.offsetTop - 140) active = id;
  }
  if(active !== current){
    current = active;
    document.querySelectorAll('.nav-link').forEach(b=>{
      b.classList.toggle('active', b.dataset.scroll === current);
    });
  }
});

function scrollToId(id){
  document.getElementById('mobile-menu')?.classList.remove('open');
  if(id==='inicio'){
    window.scrollTo({top:0, behavior:'smooth'});
    return;
  }
  document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'});
}

document.querySelectorAll('[data-scroll]').forEach(btn=>{
  btn.addEventListener('click', e=>{
    scrollToId(e.currentTarget.dataset.scroll);
  });
});

// Mobile menu
const toggle = document.getElementById('menu-toggle');
const mobile = document.getElementById('mobile-menu');
toggle?.addEventListener('click', ()=>{
  mobile.classList.toggle('open');
});

// Modal detalhes
window.abrirDetalhes = (id) => {
  const p = getProjetoDetalhes(id);
  if(!p) return;
  let modal = document.getElementById('modal-detalhes');
  if(!modal){
    modal = document.createElement('div');
    modal.id = 'modal-detalhes';
    modal.className = 'modal-overlay open';
    modal.innerHTML = `<div class="modal"><button class="modal-close" onclick="fecharModal()">✕</button><div id="modal-content"></div></div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e=>{ if(e.target===modal) fecharModal(); });
  }
  modal.classList.add('open');
  document.getElementById('modal-content').innerHTML = `
    <div style="display:flex;gap:16px;align-items:center;margin-bottom:16px">
      <div class="project-icon" style="width:64px;height:64px;font-size:28px;border-radius:16px">${p.icon}</div>
      <div><h3 style="font-size:22px;font-weight:800">${p.title}</h3><div class="project-tags" style="margin-top:8px">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>
    </div>
    <p style="color:rgba(255,255,255,.7);font-size:14px;line-height:1.6">${p.desc}</p>
    <img src="${assets.projectsIcons}" style="width:100%;height:80px;object-fit:contain;margin-top:16px;opacity:.6" />
    <div style="margin-top:24px;display:flex;gap:12px">
      <a href="${p.github}" class="btn-primary" style="text-decoration:none;font-size:11px">Abrir no GitHub</a>
      <button class="btn-ghost" onclick="fecharModal()">Fechar</button>
    </div>
  `;
};
window.fecharModal = () => document.getElementById('modal-detalhes')?.classList.remove('open');
window.addEventListener('keydown', e=>{ if(e.key==='Escape') window.fecharModal(); });

console.log('Portfolio com imagens separadas - OK', assets);