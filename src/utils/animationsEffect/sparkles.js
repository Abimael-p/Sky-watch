// utils/animationsEffect/sparkles.js
export const createSparkles = (container) => {
    const numberOfSparkles = 500; // Puedes ajustar este número
  
    for (let i = 0; i < numberOfSparkles; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkles';
  
      // Posición y tamaño aleatorios
      sparkle.style.left = `${Math.random() * 100}vw`;
      sparkle.style.top = `${Math.random() * 100}vh`;
      sparkle.style.width = `${Math.random() * 4 + 2}px`; // Tamaño entre 2px y 6px
      sparkle.style.height = sparkle.style.width; // Para mantener la centella circular
  
      // Duración y retraso de la animación
      sparkle.style.animationDuration = `${(Math.random() * 2) + 1}s`; // Duración aleatoria entre 1s y 3s
      sparkle.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio
  
      container.appendChild(sparkle);
  
      // Remover la centella después de que la animación termine
      sparkle.addEventListener('animationend', () => {
        sparkle.remove();
      });
    }
  };
  
  export const clearSparkles = (container) => {
    container.innerHTML = '';
  };
  