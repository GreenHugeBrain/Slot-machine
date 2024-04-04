const symbols = ['🍒', '🍋', '🍊', '🍇', '🍉'];

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
  const reels = document.querySelectorAll('.reel');
  
  reels.forEach(reel => {
    let i = 0;
    const interval = setInterval(() => {
      reel.textContent = symbols[i];
      i++;
      if (i === symbols.length) {
        i = 0;
      }
    }, 100);
    
    setTimeout(() => {
      clearInterval(interval);
      reel.textContent = getRandomSymbol();
    }, Math.random() * 2000 + 1000);
  });
}

document.getElementById('spinButton').addEventListener('click', spin);
