document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      alert("¡Próximamente más información!");
    });
  });
});
