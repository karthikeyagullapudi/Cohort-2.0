let btn = document.querySelector('.b1');
let inner = document.querySelector('.inner');
let percent = document.querySelector('.bottom h2');

let status = 0;

btn.addEventListener('click', () => {
  btn.style.pointerEvents = 'none';
  let num = Math.floor(Math.random() * 50) + 50;

  let intervel = setInterval(() => {
    status++;
    inner.style.width = `${status}%`;
    percent.innerHTML = `${status} %`;
  }, num);

  setTimeout(() => {
    clearInterval(intervel);
    btn.innerHTML = 'Downloaded!!';
    btn.style.opacity = 0.5;
    console.log(`Download completed in ${num / 10} seconds`);
  }, num * 100);
});
