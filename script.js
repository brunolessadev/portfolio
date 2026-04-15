// Aguarda o HTML ser totalmente carregado para então executar o script.
// Isso garante que todos os elementos (como 'foto-perfil') já existem quando o código tentar encontrá-los.
document.addEventListener('DOMContentLoaded', function() {

    // ===================================================================
    // ÁREA DE EDIÇÃO: Coloque suas informações pessoais aqui!
    // ===================================================================
    
    // --- INFORMAÇÕES PESSOAIS ---
    
    // Troque pelo link da sua foto. Use o link modificado do Google Drive ou um link direto de outro site.
    const minhaFoto = "https://i.postimg.cc/cJTdTJdy/create-a-series-of-professional-profile-pictures-i-(1).jpg"; 
    
    // A frase que aparecerá na seção "Sobre Mim".
    const fraseSobreMim = "Estudante de Engenharia de Software com os olhos voltados para o futuro da tecnologia. Tenho um grande interesse em como arquiteturas de sistemas e novas tecnologias podem ser usadas para inovar e otimizar a forma como interagimos com o mundo digital.";
    

    // Suas redes sociais. Adicione ou remova conforme precisar.
    // Ícones disponíveis em: https://fontawesome.com/v6/search?o=r&m=free&f=brands
    const minhasRedes = [
        { nome: 'LinkedIn', icone: 'fa-linkedin', url: 'https://www.linkedin.com/in/bruno-lessa-5059a423a' },
        { nome: 'GitHub', icone: 'fa-github', url: 'https://github.com/brunolessadev' },
        { nome: 'Instagram', icone: 'fa-instagram', url: 'https://www.instagram.com/brunolessa_95' },
        { nome: 'Whatsapp', icone: 'fa-whatsapp', url: 'https://wa.me/5551999101866' }
    ];

  
    // ===================================================================
    // FIM DA ÁREA DE EDIÇÃO
    // O código abaixo funciona sozinho. Você não precisa alterá-lo.
    // ===================================================================

    // --- Lógica para inserir os dados no HTML ---

    // 1. Inserir informações pessoais
    document.getElementById('foto-perfil').src = minhaFoto;
    document.getElementById('frase-sobre-mim').textContent = fraseSobreMim;


    // 3. Inserir os ícones das redes sociais
    const listaRedesElemento = document.getElementById('lista-redes-sociais');
    listaRedesElemento.innerHTML = ''; // Limpa antes de adicionar
    minhasRedes.forEach(rede => {
        listaRedesElemento.innerHTML += `<a href="${rede.url}" target="_blank" title="${rede.nome}"><i class="fab ${rede.icone}"></i></a>`;
    });
    
        document.getElementById('ano-atual').textContent = new Date().getFullYear();

  }); // Fim do 'DOMContentLoaded'