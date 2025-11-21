let btn = document.querySelector('.b1');
let main = document.querySelector('main');

btn.addEventListener('click', () => {
  let box = document.createElement('div');

  let rl = Math.random() * 100;
  let rr = Math.random() * 100;
  let rotation = Math.random() * 360;
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  box.style.width = '200px';
  box.style.height = '200px';
  box.style.backgroundColor = `rgb(${r},${g},${b})`;
  box.style.position = 'absolute';
  box.style.left = rl + '%';
  box.style.top = rr + '%';
  box.style.rotate = rotation + 'deg';

  main.appendChild(box);
});
