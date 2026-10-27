
export const projetos = [
  /*
  {
    id: 'calc-java',
    title: 'Calculadora Java',
    desc: 'Calculadora científica no console com operações avançadas, histórico e tratamento de erros.',
    tags: ['Java', 'POO'],
    icon: '🧮',
    github: '#'
  },
  */

  {
    id: 'media-dashboard',
    title: 'MediaDashboard',
    desc: 'Aplicativo desktop desenvolvido em Java e JavaFX para organizar uma biblioteca local de mídias, com navegação por categorias e pastas, favoritos, acompanhamento de episódios assistidos, visualização de fotos e temas personalizáveis.',
    tags: ['Java 17', 'JavaFX', 'Maven', 'Gson'],
    icon: '🎬',
    github: 'https://github.com/brunolessadev/MediaDashboard'
  }

  /*
  ,
  {
    id: 'vendas',
    title: 'Sistema de Vendas',
    desc: 'Arquitetura em camadas, estoque, carrinho, descontos e relatórios. Foco total em POO.',
    tags: ['Java', 'POO'],
    icon: '🛒',
    github: '#'
  },
  {
    id: 'velha',
    title: 'Jogo da Velha',
    desc: 'Lógica completa com IA minimax, placar e interface terminal estilizada.',
    tags: ['Java', 'Lógica'],
    icon: '🎮',
    github: '#'
  }
  */
];


export function renderProjetos() {
  const grid = document.getElementById('portfolio-grid');

  if (!grid) return;

  grid.innerHTML = projetos.map(p => `
    <div class="project-card" data-id="${p.id}">
      <div class="project-glow"></div>

      <div class="project-top">
        <div class="project-icon">${p.icon}</div>

        <div style="flex: 1">
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.desc}</div>

          <div class="project-tags">
            ${p.tags.map(t => `<span>${t}</span>`).join('')}
          </div>

          <a
            class="project-action"
            href="${p.github}"
            target="_blank"
            rel="noopener noreferrer"
            onclick="event.stopPropagation()"
          >
            <span>Ver no GitHub</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}


export function getProjetoDetalhes(id) {
  return projetos.find(p => p.id === id);
}
