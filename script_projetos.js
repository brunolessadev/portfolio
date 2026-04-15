// Arquivo: script_projetos.js

document.addEventListener('DOMContentLoaded', function() {

    // ===================================================================
    // ÁREA DE EDIÇÃO: Coloque as informações dos seus projetos aqui!
    // ===================================================================

    /*
    
    const meusProjetos = [
        {
            id: 'projeto-1', // Não mude o id
            imagem: 'https://i.postimg.cc/L8p5g7j2/pexels-pixabay-270348.jpg', // Adicione um link de imagem aqui
            titulo: 'Meu Portfólio',
            descricao: 'O próprio site que você está vendo! Desenvolvido com HTML, CSS e JavaScript puros para demonstrar minhas habilidades em front-end e organização de código.'
        },
              
        {
            id: 'projeto-2', // Não mude o id
            imagem: 'URL_DA_IMAGEM_DO_PROJETO_2',
            titulo: 'Nome do Projeto 2',
            descricao: 'Outro projeto incrível. Fale sobre os desafios e as soluções que você implementou aqui.'
        },
        
    ];


    */


    // ===================================================================
    // FIM DA ÁREA DE EDIÇÃO
    // O código abaixo funciona sozinho.
    // ===================================================================

    // --- Lógica para inserir os cards de projetos no HTML ---
    
    meusProjetos.forEach(projeto => {
        const cardProjetoElemento = document.getElementById(projeto.id);
        
        // Verifica se o elemento do projeto existe no HTML antes de tentar preenchê-lo
        if (cardProjetoElemento) { 
            cardProjetoElemento.innerHTML = `
                <img src="${projeto.imagem}" alt="Imagem do ${projeto.titulo}">
                <div class="projeto-card-info">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </div>
            `;
        }
    });

}); // Fim do 'DOMContentLoaded'