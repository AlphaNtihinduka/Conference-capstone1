const humberger = document.querySelector('.fa-bars');
const timesIcon = document.querySelector('.fa-times');
const slideBar = document.querySelector('.slide-bar_mobile');
const slideLi = document.querySelectorAll('.header_items_mobile li');

humberger.addEventListener('click', () => {
  slideBar.style.left = '0';
});
timesIcon.addEventListener('click', () => {
  slideBar.style.left = '-100%';
});

slideLi.forEach((n) => n.addEventListener('click', () => {
  slideBar.style.left = '-100%';
}));

const speakerContainer = document.querySelector('.speaker-personality-container');

const speakerObj = [
  {
    image: './images/person_1.png',
    name: 'Mathew Lahil',
    title: 'CEO, High Technologies',
    description: 'Found High Technologies in 2012 with a community of software developers basically based in Asia continent.',
  },
  {
    image: './images/person_3.png',
    name: 'Mathew Lahil',
    title: 'CEO, High Technologies',
    description: 'Found High Technologies in 2012 with a community of software developers basically based in Asia continent.',
  },
  {
    image: './images/person_4.png',
    name: 'Robert Mckell',
    title: 'Managing Director, Code Academy',
    description: 'Robert has been an icon in software development, worked with a number of tech companies including Microsoft, He has developed a number of software tools used by large worldwide community.',
  },
  {
    image: './images/person_5.png',
    name: 'Rachel Alice',
    title: 'Software developer',
    description: 'She has been influential to other community girls to involve in software development. Developed a banking system',
  },
  {
    image: './images/person_6.jpg',
    name: 'Emilia Loketch',
    title: 'CEO, Girls in Tech',
    description: 'Found Girls in Tech in 2014 to support girls learn software development at free cost. ',
  },
  {
    image: './images/person_2.png',
    name: 'Abdul Lahil',
    title: 'CEO, Advanced Institute of science, Sweden',
    description: 'Found High Technologies in 2012 with a community of software developers basically based in Asia continent.',
  },
];

speakerContainer.innerHTML = speakerObj
  .map(
    (individualObj) => `
    <div class="speaker-personality-cards">
      <div class="speaker-personality-card">
        <div class="speaker-img-contaiener">
          <img src="${individualObj.image}" alt="${individualObj.name}">
        </div>
        <div class="details-container">
        <h4 class="speaker-name">${individualObj.name}<h4>
        <h4 class="speaker-title">${individualObj.title}<h4>
        <h4 class="speaker-description">${individualObj.description}<h4>
        </div>
      </div>
    </div>
`,
  )
  .join('');
