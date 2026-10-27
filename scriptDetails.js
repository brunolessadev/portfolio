// scriptDetails.js - história e tecnologias
export const historia = [
{
    period: '2026-2030',
    title: 'Engenharia de Software',
    place: 'UniCesumar',
    icon: '💻',
    color: '#FF00E0',
    present: true
  },
  {
    period: '2026',
    title: 'Java Programming I',
    place: 'Universidade de Helsinque · MOOC.fi',
    icon: '☕',
    color: '#00E5FF',
    completed: true
  },
  {
    period: '2026',
    title: 'Java Programming II',
    place: 'Universidade de Helsinque · MOOC.fi',
    icon: '☕',
    color: '#FF00E0',
    completed: true
  },
  {
    period: '2026',
    title: 'Java Spring Boot',
    place: 'Guia Completo e Atualizado do Zero ao Deploy na AWS',
    icon: '🌱',
    color: '#00E5FF',
    present: true
  },
  {
    period: '2026',
    title: 'Estudo contínuo de inglês',
    place: 'Aprendizado contínuo com objetivo de alcançar a fluência',
    icon: '🌐',
    color: '#FF00E0',
    present: true
  }
];

export const tecnologias = [
  { name: 'Java', icon: 'devicon-java-plain colored', sub: 'CORE' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', sub: 'ES2024' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', sub: 'TYPED' },
  { name: 'C#', icon: 'devicon-csharp-plain colored', sub: '.NET' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored', sub: 'MARKUP' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored', sub: 'STYLE' },
  { name: 'React', icon: 'devicon-react-original colored', sub: '18.x' },
  { name: 'Angular', icon: 'devicon-angular-plain colored', sub: '17.x' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', sub: 'RUNTIME' },
  { name: 'Git', icon: 'devicon-git-plain colored', sub: 'VCS' },
  {
  name: 'IntelliJ IDEA',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg',
  sub: 'IDE',
  image: true
},
  { name: 'VS Code', icon: 'devicon-vscode-plain colored', sub: 'EDITOR' }
];

export function renderHistoria(){
  const el = document.getElementById('historia-timeline');
  if(!el) return;
  el.innerHTML = `<div class="timeline-grid">` + historia.map(h => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-top">
          <div class="timeline-icon">${h.icon}</div>
          <div class="timeline-period" style="color:${h.color}">${h.period} ${h.present ? '• Presente' : ''}</div>
        </div>
        <div class="timeline-title">${h.title}</div>
        <div class="timeline-place">${h.place}</div>
        ${h.present ? '<div class="timeline-present">● em andamento</div>' : ''}
      </div>
    </div>
  `).join('') + `</div>`;
}

export function renderTecnologias() {
  const el = document.getElementById('tech-grid');
  if (!el) return;

  el.innerHTML = tecnologias.map(t => `
    <div class="tech-card">
      <div class="tech-icon">
  ${t.image
    ? `<img src="${t.icon}" alt="" class="tech-logo">`
    : `<i class="${t.icon}" aria-hidden="true"></i>`
  }
</div>
      <div class="tech-name">${t.name}</div>
      <div class="tech-sub">${t.sub}</div>
    </div>
  `).join('');
}