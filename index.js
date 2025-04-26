document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const icon = header.querySelector(".icon img");

    header.addEventListener("click", () => {
      item.classList.toggle("active");
      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.src = "/assets/svgs/cursor-close.svg";
      } else {
        content.style.maxHeight = "0";
        icon.src = "/assets/svgs/cursor-open.svg";
      }
    });

    if (item.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  });
});

var imagem = document.getElementById("minhaImagem");
var modal = document.getElementById("meuModal");
var imgModal = document.getElementById("imgModal");
var botaoFechar = document.getElementsByClassName("fechar")[0];

function abrirModal() {
  modal.style.display = "flex"; 
  modal.offsetWidth; 
  modal.classList.add("ativo");
  imgModal.src = imagem.src;
  imgModal.classList.add("ativo");
}

function fecharModal() {
  modal.classList.remove("ativo");
  imgModal.classList.remove("ativo");
  setTimeout(function() {
    modal.style.display = "none";
  }, 600); 
}

window.onclick = function(event) {
  if (event.target == modal) {
    fecharModal();
  }
};
const btnTopo = document.querySelector(".up-Button");
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    
    btnTopo.style.display = "flex";
  } else {
    btnTopo.style.display = "none";
  }
});

const header = document.querySelector('header');
const scrollLine = document.querySelector('.scroll-line');
let lastScrollTop = 0;
let scrollThreshold = 50;
let hideThreshold = 100;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  scrollLine.style.width = `${scrollPercent}%`;

  if (scrollTop > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  if (scrollTop > lastScrollTop && scrollTop > hideThreshold) {
    header.classList.add('hidden');
  } else if (scrollTop < lastScrollTop && scrollTop < hideThreshold) {
    header.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});
