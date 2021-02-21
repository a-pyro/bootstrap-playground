console.log('Hi there! 🔥');
const shit = '💩',
  fire = '🔥',
  rocket = '🚀',
  poudzo = '👍🏻';

const row = document.querySelector('.row');
console.log(row);

row.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    row.scrollLeft += 200;
  } else {
    row.scrollLeft -= 200;
  }
  // console.log(e.deltaY);
});

// randomize pics
const dice = () => Math.random() * 1000;

document
  .querySelectorAll('.row .col img')
  .forEach((img) => (img.src = `${img.src.slice(0, -1)}${dice()}`));

const chevrons = document.querySelectorAll('i.fas');
chevrons.forEach((chevron) => chevron.addEventListener('click', scrollRow));
function scrollRow(e) {
  if (e.target.classList.contains('fa-chevron-circle-left')) {
    row.scrollLeft -= 1000;

    console.log('left clicked');
  } else {
    console.log('right clicked');
    row.scrollLeft += 1000;
  }
}
