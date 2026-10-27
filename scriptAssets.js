// scriptAssets.js - todas as imagens separadas do bundle gigante
// Agora cada imagem é um arquivo real em /images/

export const assets = {
  logoBL: './images/logo-bl.png',
  heroCity: './images/hero-city.webp',
  timelineIcons: './images/timeline-icons.png',
  techRef: './images/tech-ref.png',
  projectsIcons: './images/projects-icons.png',
  springBoot: './images/spring-boot.png'
};

// Mapeamento das variáveis originais do bundle (L9, _9, HE, etc) para compatibilidade
export const L9 = assets.logoBL;
export const _9 = assets.heroCity;
export const HE = assets.timelineIcons;
export const VE = assets.techRef;
export const bE = assets.projectsIcons;
export const OE = assets.springBoot;

// Helper para pré-carregar
export function preloadAssets(){
  Object.values(assets).forEach(src => {
    const img = new Image();
    img.src = src;
  });
}