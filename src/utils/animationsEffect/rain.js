export const createRain = (container) => {
  const numberOfDrops = 300; // Puedes ajustar este número

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.className = 'drop';
    drop.style.left = `${Math.random() * 100}vw`; // Posicións horizontal aleatoria
    drop.style.animationDuration = `${(Math.random() * .1) + .1}s`; // Velocidad aleatoria
    drop.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio
    container.appendChild(drop);
  }
};

export const clearRain = (container) => {
  container.innerHTML = '';
};