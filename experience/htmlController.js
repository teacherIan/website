const arrayOfItems = document.querySelectorAll('.inner-container');
const arrayOfDescriptions = document.querySelectorAll('.description');
const arrayOfItemDiv = document.querySelectorAll('.item');
const textArray = document.querySelectorAll('.text');
const menu = document.querySelector('.menuButton');
const menuHTML = document.querySelector('.container');
const projects = document.querySelector('.projects');
const demoLessons = document.querySelector('.demo-Lessons');
const resume = document.querySelector('.resume');
const projectThumbnails = document.querySelectorAll('.thumbnail-projects');

projectThumbnails.forEach((item) => {
  item.style.height = 0;
});

let menuToggle = false;

let selected = -1;
let active = -1; //controls which section of the menu is visible
export let currentScene = 'start';

arrayOfItems.forEach((item, i) => {
  arrayOfDescriptions[i].classList.remove('description-selected');
  item.addEventListener('click', (event) => {
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

    if (i == 0) {
      projectThumbnails.forEach((item) => {
        item.style.height = '150px';
      });
    }
    if (i == 1) {
      projectThumbnails.forEach((item) => {
        item.style.height = '0px';
      });
    }
    if (i == 2) {
      projectThumbnails.forEach((item) => {
        item.style.height = '0px';
      });
    }
  });
});

const removeSelected = (selectedElement) => {
  // console.log(selectedElement);
  arrayOfItems.forEach((item) => {
    item.classList.remove('selected');
  });
};

arrayOfItemDiv.forEach((item, i) => {
  item.addEventListener('mouseover', () => {
    arrayOfItemDiv.forEach((innerItem) => {
      innerItem.style.opacity = '0.5';
    });

    if (selected == 0 && i < 4) {
      projects.style.height = '150vh';
      textArray[0].innerHTML = 'this is the description for ' + i;
      if (i == 0) {
        textArray[0].innerHTML = ` <div class='inner-header'> House Point Counter </div> I wanted to create more interest in our school 'house' system, especially for younger students, while giving older students an example of how they can use code to improve their school. This counter does both these things, and has been well received by students and facility.  Can easily be adapted for different schools and situations.  This project goes along with its backend project, to give teachers an easy way to add and remove points while keeping tabs on why points were add or removed.  click  ${'<a target="_blank" href="https://houses-nine.vercel.app/" class="link">here</a>'} for a demo page or ${'<a target="_blank" href="https://github.com/teacherIan/front-end-update" class="link">here</a>'} for the git repository.`;
        arrayOfItemDiv[0].style.opacity = '1';
      }
      if (i == 1) {
        textArray[0].innerHTML = `<div class='inner-header'> Computer Science Learning Platform </div> I wanted to create a learning platform for students that would leave the learner the skills needed to create programs the way professionals do.  Although under construction, my vision is for a students to be able to fully do a six month course using only this site, and by the end, have the abilities to use an IDE.  By able to create projects from scratch. Use basic git commands and deploy their programs. Although unfinished, you can view the site here ${'<a target="_blank" href="https://school-learn-to-program.vercel.app/" class="link">here</a>'} for a demo page or ${'<a target="_blank" href="https://github.com/teacherIan/front-end-update" class="link">here</a>'} for the git repository.`;
        arrayOfItemDiv[1].style.opacity = '1';
      }
      if (i == 2) {
        textArray[0].innerHTML = `<div class='inner-header'> 3D Math/CS challenge </div>This project is designed to create interest in computer science while also being a fun and challenging house competition.  Students are asked to create a design mathematical design using using a template I created which abstracted away some of the difficulty of coding .  Students with no coding experience can also take part in the challenge. Here is the repo for the starter project ${'<a target="_blank" href="https://github.com/teacherIan/steam-house-competition-starter" class="link">here</a>'} of view any of these example demos: ${'<a target="_blank" href="https://steam-house-competition-starter-demo-a.vercel.app/" class="link">example A</a>'}, ${'<a target="_blank" href="https://steam-house-competition-starter-demo-b.vercel.app/" class="link">example B</a>'}, or   ${'<a target="_blank" href="https://steam-house-competition-starter-demo-c.vercel.app/" class="link">example C</a>'} `;
        arrayOfItemDiv[2].style.opacity = '1';
      }
      if (i == 3) {
        textArray[0].innerHTML = `<div class='inner-header'> IB/IG Folder System </div>This project is designed to help teachers create the correct folder structure for sending example work into IB/IG.  Can be used with any sized class. Click  ${'<a target="_blank" href="https://ib-ig-file-system.herokuapp.com/" class="link">here</a>'} to view a demo site, or  ${'<a target="_blank" href="https://github.com/teacherIan/IB_IG_class_names" class="link">here</a>'}, to view the repo`;
        arrayOfItemDiv[3].style.opacity = '1';
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
