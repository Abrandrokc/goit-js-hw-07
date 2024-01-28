
 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  const input = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createBtn.addEventListener('click', createBoxes);
  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = input.value;

    if (amount >= 1 && amount <= 100) {
      boxesContainer.innerHTML = ''; 

      for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const color = getRandomHexColor();

        const boxHTML = `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
        boxesContainer.insertAdjacentHTML('beforeend', boxHTML);
      }

      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }