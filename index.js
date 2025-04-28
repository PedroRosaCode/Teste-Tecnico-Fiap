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

  // Modal de imagem
  const imagem = document.getElementById("minhaImagem");
  const modal = document.getElementById("meuModal");
  const imgModal = document.getElementById("imgModal");
  const botaoFechar = document.getElementsByClassName("fechar")[0];

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
    setTimeout(() => {
      modal.style.display = "none";
    }, 600);
  }

  imagem.addEventListener("click", abrirModal);
  botaoFechar.addEventListener("click", fecharModal);

  modal.addEventListener("click", fecharModal);

  // Botão para voltar ao topo
  const btnTopo = document.querySelector(".up-Button");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      btnTopo.style.display = "flex";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Header e barra de scroll
  const pageHeader = document.querySelector("header");
  const scrollLine = document.querySelector(".scroll-line");
  let lastScrollTop = 0;
  const scrollThreshold = 50;
  const hideThreshold = 100;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    scrollLine.style.width = `${scrollPercent}%`;

    if (scrollTop > scrollThreshold) {
      pageHeader.classList.add("scrolled");
    } else {
      pageHeader.classList.remove("scrolled");
    }

    if (scrollTop > lastScrollTop && scrollTop > hideThreshold) {
      pageHeader.classList.add("hidden");
    } else if (scrollTop < lastScrollTop && scrollTop < hideThreshold) {
      pageHeader.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
  });
});
