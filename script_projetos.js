// Arquivo: script_projetos.js

document.addEventListener('DOMContentLoaded', function() {

    // ===================================================================
    // ÁREA DE EDIÇÃO: Coloque as informações dos seus projetos aqui!
    // ===================================================================

    
    
    const meusProjetos = [
        {
            id: 'projeto-1', // Não mude o id
            imagem: '/assets/_projeto1.jpg', // Adicione um link de imagem aqui
            titulo: 'Lion Sin Of Pride',
            descricao: 'O próprio site que você está vendo! Desenvolvido com HTML, CSS e JavaScript puros para demonstrar minhas habilidades em front-end e organização de código.',
            link: 'https://lionsinofpride.pages.dev/'
        },
        
        
        /*

        {
            id: 'projeto-2', // Não mude o id
            imagem: 'https://i.postimg.cc/L8p5g7j2/pexels-pixabay-270348.jpg', // Adicione um link de imagem aqui
            titulo: 'Meu Portfólio',
            descricao: 'O próprio site que você está vendo! Desenvolvido com HTML, CSS e JavaScript puros para demonstrar minhas habilidades em front-end e organização de código.'
        },

        {
            id: 'projeto-3', // Não mude o id
            imagem: 'https://i.postimg.cc/L8p5g7j2/pexels-pixabay-270348.jpg', // Adicione um link de imagem aqui
            titulo: 'Meu Portfólio',
            descricao: 'O próprio site que você está vendo! Desenvolvido com HTML, CSS e JavaScript puros para demonstrar minhas habilidades em front-end e organização de código.'
        },

        */
        
    ];


    // --- Lógica para inserir os cards de projetos no HTML ---
    
meusProjetos.forEach(projeto => {
    const cardProjetoElemento = document.getElementById(projeto.id);
    
    if (cardProjetoElemento) { 
        cardProjetoElemento.innerHTML = `
            <img src="${projeto.imagem}" alt="Imagem do ${projeto.titulo}">
            <div class="projeto-card-info">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </div>
        `;

        // --- NOVO: torna o card clicável ---
        if (projeto.link) {
            cardProjetoElemento.style.cursor = 'pointer';
            cardProjetoElemento.addEventListener('click', () => {
                window.open(projeto.link, '_blank'); // abre em nova aba
                // use window.location.href = projeto.link; se quiser na mesma aba
            });
        }
    }
});

}); // Fim do 'DOMContentLoaded'