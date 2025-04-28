# 📂 Projeto: Teste Técnico FIAP

## 📋 Descrição

Este projeto implementa várias interações de front-end usando **JavaScript**, trazendo mais dinamismo e interatividade para o site:

* **Barra de progresso de scroll** que acompanha o avanço do usuário na página;
* **Modal de imagem** (abre imagem em destaque e fecha ao clicar em qualquer lugar);
* **Accordion funcional** (abre e fecha conteúdos);
* **Botão "Voltar ao Topo"** que aparece ao rolar a página;
* **Animações suaves** ao interagir com o conteúdo.

## 🚀 Funcionalidades

### Accordion

* Cada item pode ser expandido ou recolhido ao clicar no cabeçalho.
* Ícone do cabeçalho muda dinamicamente para "abrir" ou "fechar" (`cursor-open.svg` e `cursor-close.svg`).
* Transição suave do conteúdo.

### Modal de Imagem

* Ao clicar na imagem principal (`#minhaImagem`), a imagem é aberta em um modal centralizado.
* O modal pode ser fechado clicando em qualquer lugar (imagem ou fundo).
* Animações de entrada e saída são aplicadas para suavizar a experiência.

### Botão "Voltar ao Topo"

* Um botão com a classe `.up-Button` aparece ao rolar 600px para baixo.
* Ao clicar nele, o usuário pode ser levado de volta ao topo da página (implementação opcional de rolagem suave).

### Barra de Progresso de Scroll

* Uma linha de progresso (`.scroll-line`) acompanha o quanto da página foi percorrido.

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Imagens SVG (ícones de abertura e fechamento)

## 📂 Estrutura de Arquivos
* /assets
* /svgs
 cursor-open.svg / 
 cursor-close.svg

* index.html
* style.css
* script.js

[//]: # (Adicione aqui um link ou descrição de uma prévia visual do projeto, se disponível)

## 👨‍💻 Como usar

1.  **Clonar o Repositório:**
    Abra seu terminal ou prompt de comando e navegue até o diretório onde você deseja clonar o projeto. Execute o seguinte comando:

    ```bash
    git clone https://github.com/PedroRosaCode/Teste-Tecnico-Fiap

2.  **Navegar até o Diretório do Projeto:**
    Após a clonagem, entre na pasta do projeto:

    ```bash
    cd Teste-Tecnico-Fiap
    ```
3.  **Abrindo o arquivo `index.html` diretamente no navegador:**
    Localize o arquivo principal HTML do projeto (`index.html`) no seu sistema de arquivos e clique duas vezes nele. O seu navegador padrão deverá abrir o projeto.

4.  **Abrindo pelo Visual Studio Code (VS Code):**
    Se você utiliza o VS Code, siga estes passos:
    * Abra a pasta do projeto no VS Code
    * **Opção 1: Abrindo o `index.html`:** Navegue até o arquivo `index.html` no painel Explorer do VS Code e clique duas vezes para abri-lo no editor. Em seguida, clique com o botão direito em qualquer lugar dentro do arquivo `index.html` e selecione a opção "Abrir no Navegador Padrão".
    * **Opção 2: Utilizando a extensão Live Server (recomendado para desenvolvimento):**
        * Certifique-se de ter a extensão Live Server instalada no VS Code.
        * Abra o arquivo `index.html` no editor do VS Code.
        * Clique com o botão direito em qualquer lugar dentro do arquivo `index.html` e selecione a opção "Open with Live Server".
        * Alternativamente, você pode clicar no botão "Go Live" que aparece no canto inferior direito da janela do VS Code após abrir um arquivo HTML.

    Ao utilizar o Live Server, um servidor de desenvolvimento local será iniciado e o projeto será aberto automaticamente no seu navegador. Qualquer alteração que você fizer nos arquivos HTML, CSS ou JavaScript será automaticamente refletida no navegador após salvar.


## 🧩 Créditos

Desenvolvido por [Pedro Lucas Rosa Rezende] (Estagiário de TI - Paulista) — [https://www.linkedin.com/in/pedro-lucas-rosa-rezende-282ba02b6/](https://www.linkedin.com/in/pedro-lucas-rosa-rezende-282ba02b6/)
