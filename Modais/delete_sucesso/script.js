document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
  
    // Mostrar o modal automaticamente
    setTimeout(() => {
      modal.classList.add("show");
  
      // Fechar o modal após 3 segundos
      setTimeout(() => {
        modal.classList.remove("show");
      }, 3000);
    }, 500);
  });
  