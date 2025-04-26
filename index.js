document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('.icon img');

        header.addEventListener('click', () => {
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.src = "/assets/svgs/cursor-close.svg";
            } else {
                content.style.maxHeight = '0';
                icon.src = '/assets/svgs/cursor-open.svg';
            }
        });

        // Abre o primeiro item que possui a classe 'active' por padrão
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    });
});


// Obtém a imagem, o modal e os elementos relacionados
var imagem = document.getElementById("minhaImagem");
var modal = document.getElementById("meuModal");
var imgModal = document.getElementById("imgModal");
var legendaTexto = document.getElementById("legenda");
var botaoFechar = document.getElementsByClassName("fechar")[0];

// Função para abrir o modal
function abrirModal(){
  modal.style.display = "flex";
  imgModal.src = imagem.src;
  legendaTexto.innerHTML = imagem.alt; // Se você tiver um atributo 'alt' na imagem
}

// Função para fechar o modal
function fecharModal() {
  modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}