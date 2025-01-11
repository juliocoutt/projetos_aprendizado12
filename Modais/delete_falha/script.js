document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
  
    // Mostrar o modal automaticamente
    setTimeout(() => {
      modal.classList.add("show");
  
      // Fechar o modal após 5 segundos
      setTimeout(() => {
        modal.classList.remove("show");
      }, 5000);
    }, 500);
  });
  