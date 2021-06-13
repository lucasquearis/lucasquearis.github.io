// Exercício 1
const selectBody = document.getElementById('body');

const createTitle = () => {
  const createH1 = document.createElement('h1');
  createH1.innerHTML = 'Paleta de Cores';
  createH1.id = 'title';
  selectBody.appendChild(createH1);
};

const createTable = document.createElement('table');
const createPallet = () => {
  createTable.id = 'color-palette';
  selectBody.appendChild(createTable);
  const selectTable = document.getElementById('color-palette');
  for (let index = 1; index < 5; index += 1) {
    const createTh = document.createElement('th');
    selectTable.appendChild(createTh);
    createTh.className = 'color ';
  }
};

const classnameForPallet = () => {
  const selectPallet = document.querySelectorAll('.color ');
  const arrayCor = ['black selected', 'two', 'three', 'four'];
  const stringColor = 'color';
  selectPallet.forEach((color, index) => {
    const corSozinha = color;
    corSozinha.className = `${stringColor} ${arrayCor[index]}`;
  });
};

const forQuadrado = (numb) => {
  for (let index = 1; index <= numb; index += 1) {
    const createColuna = document.createElement('tr');
    for (let index2 = 0; index2 < numb; index2 += 1) {
      const createTd = document.createElement('td');
      createColuna.appendChild(createTd);
      createTd.className = 'pixel';
    }
    const selecQuadrado = document.getElementById('pixel-board');
    selecQuadrado.appendChild(createColuna);
  }
};

const clearSquares = () => {
  const getSquare = document.querySelector('#pixel-board');
  getSquare.remove();
};

const criarQuadrado = (numb) => {
  const createQuadrado = document.createElement('table');
  createQuadrado.id = 'pixel-board';
  selectBody.appendChild(createQuadrado);
  forQuadrado(numb);
};

const defaultColorPallet = () => {
  const selectPallet = document.querySelectorAll('.color ');
  const arrayCor = ['black', 'two', 'three', 'four'];
  const stringColor = 'color';
  selectPallet.forEach((color, index) => {
    const corSozinha = color;
    corSozinha.className = `${stringColor} ${arrayCor[index]}`;
  });
};

const selectColorPalltet = () => {
  createTable.addEventListener('click', (event) => {
    const cliqueAlvo = event;
    const condicao = cliqueAlvo.target.className === 'color black selected';
    if (condicao) {
      classnameForPallet();
    } else {
      defaultColorPallet();
      cliqueAlvo.target.className += ' selected';
    }
  });
};

const pickupColor = () => {
  const pickupSelectedColor = document
    .querySelector('.selected').style.backgroundColor;
  const condicao = pickupSelectedColor === '';
  return (condicao) ? 'black' : pickupSelectedColor;
};
// Nao estava conseguindo usar o getElement pois retornava uma HTMLCollection e nao uma array, descobri uma solucao aqui;
// https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
const squarePaint = () => {
  const pickupSquare = document.getElementsByClassName('pixel');
  [...pickupSquare].forEach((square) => {
    square.addEventListener('click', (event) => {
      const click = event;
      console.log('ta correndo');
      const condicao = click.target.style.backgroundColor === pickupColor();
      if (condicao) {
        click.target.removeAttribute('style');
        console.log('altera cor');
      } else {
        click.target.style.backgroundColor = pickupColor();
        console.log('tentando pintar');
      }
    });
  });
};

const createButton = () => {
  const newButton = document.createElement('button');
  newButton.id = 'clear-board';
  newButton.innerText = 'Limpar';
  const selectPallet = document.querySelector('#color-palette');
  selectPallet.insertAdjacentElement('afterend', newButton);
  newButton.addEventListener('click', () => {
    const findPixel = document.querySelectorAll('.pixel');
    findPixel.forEach((square) => {
      const eachSquare = square;
      eachSquare.removeAttribute('style');
    });
  });
};

const populateDiv = () => {
  const newInput = document.createElement('input');
  const newButton = document.createElement('button');
  newInput.setAttribute('type', 'number');
  newInput.id = 'board-size';
  newButton.id = 'generate-board';
  newButton.innerText = 'VQV';
  newInput.setAttribute('max', 50);
  newInput.setAttribute('min', 1);
  const selectDivSubmit = document.querySelector('#divSubmit');
  selectDivSubmit.appendChild(newInput);
  selectDivSubmit.appendChild(newButton);
};

const createInput = () => {
  const newDiv = document.createElement('div');
  newDiv.id = 'divSubmit';
  const selectCleanButton = document.querySelector('#clear-board');
  selectCleanButton.insertAdjacentElement('afterend', newDiv);
  populateDiv();
};

const submitButton = () => {
  const selectSubmitButton = document.querySelector('#generate-board');
  selectSubmitButton.addEventListener('click', () => {
    let catchInputValue = document.querySelector('#board-size').value;
    if (catchInputValue === '') {
      alert('Board inválido!');
    } else {
      clearSquares();
      if (catchInputValue < 5) {
        catchInputValue = 5;
      } else if (catchInputValue > 50) {
        catchInputValue = 50;
      }
      criarQuadrado(catchInputValue);
      squarePaint();
    }
  });
};

const randomNumber = () => {
  const template = `rgb(${Math
    .round(Math.random() * 255)}, ${Math
    .round(Math.random() * 255)}, ${Math
    .round(Math.random() * 255)})`;
  return template;
};
const randomPalletColors = () => {
  const selectPallet2 = document.querySelector('.two');
  const selectPallet3 = document.querySelector('.three');
  const selectPallet4 = document.querySelector('.four');
  selectPallet2.style.backgroundColor = randomNumber();
  selectPallet3.style.backgroundColor = randomNumber();
  selectPallet4.style.backgroundColor = randomNumber();
};

const randomButton = () => {
  const newButton = document.createElement('button');
  newButton.id = 'random-button';
  newButton.innerText = 'Mudar Cores';
  const selectPallet = document.querySelector('#color-palette');
  selectPallet.insertAdjacentElement('beforebegin', newButton);
  newButton.addEventListener('click', () => randomPalletColors());
};

window.onload = () => {
  createTitle();
  createPallet();
  classnameForPallet();
  criarQuadrado(5);
  selectColorPalltet();
  squarePaint();
  pickupColor();
  createButton();
  createInput();
  submitButton();
  randomPalletColors();
  randomButton();
};
