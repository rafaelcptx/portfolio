window.sr = ScrollReveal({ reset: true });
sr.reveal(".contentDiv", { duration: 2000 });
sr.reveal(".imageDiv", { duration: 2000 });
sr.reveal(".project", { duration: 2000 });

function handleColors() {
  let header = document.getElementById("headerDiv");
  let blackElements = document.getElementsByClassName("blackFont");
  let buttons = document.getElementsByClassName("button");
  let text = document.getElementsByClassName("text");
  let deepGreyFont = document.getElementsByClassName("deepGreyFont");
  let brown = document.getElementsByClassName("brownFont");
  let bar = document.getElementById("bar");
  let aux = document.getElementById("aux");

  if (aux.style.color === "white") {
    aux.style.color = "black";
    document.body.style.backgroundColor = "black";
    header.style.backgroundColor = "black";
    document.getElementById("topAnchor").style.color = "white";
    bar.style.borderBottom = "solid 1px #383838";
    document.getElementById("nlMode").style.backgroundColor = "white";
    document.getElementById("deepBlueFont").style.color = "#4AA4E0";

    // Muda cor da fonte de todos os elementos que tenham a classe blackFont.
    for (let i = 0; i < blackElements.length; i++) {
      blackElements[i].style.color = "white";
    }

    // Muda cor da fonte e da borda de todos os botões que tenham a classe buttons.
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.color = "white";
      buttons[i].style.border = "2px solid white";
    }

    // Muda cor da fonte e da borda de todos os botões que tenham a classe buttons.
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = "#d3d3d3";
    }

    // Muda cor da fonte e da borda de todos os botões que tenham a classe buttons.
    for (let i = 0; i < deepGreyFont.length; i++) {
      deepGreyFont[i].style.color = "#d3d3d3";
    }

    // Muda cor da fonte e da borda de todos os botões que tenham a classe buttons.
    for (let i = 0; i < brown.length; i++) {
      brown[i].style.color = "#E33F29";
    }
  } else {
    aux.style.color = "white";
    document.body.style.backgroundColor = "white";
    header.style.backgroundColor = "white";
    document.getElementById("topAnchor").style.color = "black";
    bar.style.borderBottom = "solid 1px #EBEBEB";
    document.getElementById("nlMode").style.backgroundColor = "black";
    document.getElementById("deepBlueFont").style.color = "#212B41";

    // Muda cor da fonte de todos os elementos que tenham a classe blackFont.
    for (let i = 0; i < blackElements.length; i++) {
      blackElements[i].style.color = "black";
    }

    // Muda cor da fonte e da borda de todos os botões que tenham a classe buttons.
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.color = "black";
      buttons[i].style.border = "2px solid black";
    }

    // Muda cor da fonte e da borda de todos os botões que tenham a classe buttons.
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = "#999999";
    }

    // Muda cor da fonte e da borda de todos os botões que tenham a classe buttons.
    for (let i = 0; i < deepGreyFont.length; i++) {
      deepGreyFont[i].style.color = "#666666";
    }

    // Muda cor da fonte e da borda de todos os botões que tenham a classe buttons.
    for (let i = 0; i < brown.length; i++) {
      brown[i].style.color = "#8E4A43";
    }
  }
}

handleColors();
