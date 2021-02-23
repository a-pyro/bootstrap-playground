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
