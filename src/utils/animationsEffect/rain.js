// utils/animationsEffect/rain.js
export const createRain = (container) => {
  const numberOfDrops = 400;

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.className = 'drop';

    const randomHeight = Math.random() * 30 + 70; // Altura de la gota (entre 70vh y 100vh)
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.height = `${Math.random() * 20 + 10}px`; // Altura de la gota
    drop.style.animationDuration = `${(Math.random() * 0) + .2}s`; // Velocidad aleatoria
    drop.style.animationDelay = `${Math.random() * 2}s`;
    drop.style.opacity = `${Math.random() * 0.5 + 0.5}`; // Opacidad aleatoria

    container.appendChild(drop);
  };
}

export const clearRain = (container) => {
  container.innerHTML = '';
};
