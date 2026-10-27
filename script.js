let scanBtn = document.getElementById('scanBtn');
let finalMessage = document.getElementById('finalMessage');
let symbols = document.querySelectorAll('.symbol-wrap');
let hints = document.querySelectorAll('.hint');

let scanDelay = 1200;
let decodeDelay = 1000;
let finalDelay = 600;

scanBtn.onclick = function () {
  scanBtn.disabled = true;

  for (let i = 0; i < symbols.length; i++) {
    startScan(symbols[i], i);
  }
};

function startScan(symbol, index) {
  setTimeout(function () {
    symbol.classList.add('scanning');
  }, index * scanDelay);


  setTimeout(function () {
    symbol.classList.remove('scanning');
    symbol.classList.add('decoded');

    if (index === symbols.length - 1) {
      setTimeout(function () {
        finalMessage.classList.add('visible');
        removeHints();
      }, finalDelay);
    }
  }, index * scanDelay + decodeDelay);
}

function removeHints() {
  for (let i = 0; i < hints.length; i++) {
    hints[i].parentNode.removeChild(hints[i]);
  }
}