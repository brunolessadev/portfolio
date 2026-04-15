// Arquivo: script_detalhes.js

document.addEventListener('DOMContentLoaded', function() {

  // ==================================================================
  // ÁREA DE EDIÇÃO: Todas as informações da seção "Detalhes"
  // ==================================================================

  const meusDetalhes = {
    Nome: 'Bruno Lessa',
    // A idade será adicionada dinamicamente abaixo
    Localização: 'RS, Brasil'
  };

 
  // ==================================================================
  // FIM DA ÁREA DE EDIÇÃO
  // ==================================================================

  // --- LÓGICA PARA CRIAR O HTML E ATUALIZAR A IDADE ---

  // 1. Pega o elemento da lista que vamos preencher
  const listaDetalhesElemento = document.getElementById('lista-detalhes');
  
  // Limpa a lista para garantir que está vazia
  listaDetalhesElemento.innerHTML = '';

  // 2. Cria o HTML para os detalhes estáticos (Nome, Localização)
  for (const chave in meusDetalhes) {
      listaDetalhesElemento.innerHTML += `<li><strong>${chave}:</strong> ${meusDetalhes[chave]}</li>`;
  }
  
});