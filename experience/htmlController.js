const arrayOfItems = document.querySelectorAll('.inner-container');
// const projects = document.querySelector('.');

export let currentScene = 'start';

arrayOfItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log(event.target);
    removeSelected();
    item.classList.add('selected');

    console.log(currentScene);
  });
});

const removeSelected = () => {
  arrayOfItems.forEach((item) => {
    item.classList.remove('selected');
  });
};
