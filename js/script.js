document.addEventListener("DOMContentLoaded", () => {
const botones = document.querySelectorAll(".btn");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const destino = boton.getAttribute("data-url");
      if (destino) {
        window.location.href = destino;
      } else {
        alert("No se ha definido una URL para este botón.");
      }
    });
  });
})