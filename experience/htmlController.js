const arrayOfItems = document.querySelectorAll('.inner-container');
const arrayOfDescriptions = document.querySelectorAll('.description');
const arrayOfItemDiv = document.querySelectorAll('.item');
const textArray = document.querySelectorAll('.text');
// const projects = document.querySelector('.');
// console.log(arrayOfDescriptions);
const menu = document.querySelector('.menuButton');
const menuHTML = document.querySelector('.container');
let menuToggle = false;

let selected = -1;
export let currentScene = 'start';

arrayOfItems.forEach((item, i) => {
  arrayOfDescriptions[i].classList.remove('description-selected');
  item.addEventListener('click', (event) => {
    // console.log(event.target);
    if (i != selected) {
      selected = i;
      removeSelected(i);
      item.classList.add('selected');
      arrayOfDescriptions.forEach((item) => {
        item.classList = 'description';
        item.style.opacity = '0';
        setTimeout(() => {
          arrayOfDescriptions[i].classList.add('description-selected');
          arrayOfDescriptions[i].style.opacity = '1';
        }, 1000);
      });
    }

    // console.log(currentScene);
  });
});

const removeSelected = (selectedElement) => {
  // console.log(selectedElement);
  arrayOfItems.forEach((item) => {
    item.classList.remove('selected');
  });
};

console.log(arrayOfItemDiv);

arrayOfItemDiv.forEach((item, i) => {
  item.addEventListener('mouseover', () => {
    if (selected == 0 && i < 3) {
      textArray[0].innerHTML = 'this is the description for ' + i;
      if (i == 0) {
        textArray[0].innerHTML = `Counter system for school house systems.  Can easily be adapted for different schools and situations click  ${'<a target="_blank" href="http://www.cnn.com" class="link">here</a>'} for a demo page and ${'<a target="_blank" href="http://www.cnn.com" class="link">here</a>'} for the git repository.`;
      }
    } else if (selected == 1 && i < 6) {
      console.log('Current item hovered = ' + i);
    } else if (selected == 2 && i < 9) {
      console.log('Current item hovered = ' + i);
    }
  });
});

menu.addEventListener('click', () => {
  menuToggle = !menuToggle;
  console.log(menuToggle);
  menuHTML.style.opacity = 1;
  menu.style.opacity = 0;

  menuHTML.classList = 'container show';
});

document.addEventListener('keydown', () => {
  console.log('Key Pressed');
  menuHTML.classList = 'container hide';
  menu.style.opacity = 1;
});
