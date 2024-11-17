// Função para aplicar animação de fade-in nos textos
window.onload = function() {
    let elements = document.querySelectorAll('.fade-in');
    
    // Aplique o efeito de fade-in imediatamente após o carregamento da página
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.5}s`; // Adiciona um atraso entre as animações
    });
  };