import './main.css';
import randerVersusViewer from './randerVersusViewer';

let num = 1;

const button1v1 = document.querySelector('.btn1v1');
button1v1.addEventListener('click', () => {
  num = 1;
});

const button2v2 = document.querySelector('.btn2v2');
button2v2.addEventListener('click', () => {
  num = 2;
});

const button3v3 = document.querySelector('.btn3v3');
button3v3.addEventListener('click', () => {
  num = 3;
});

const button4v4 = document.querySelector('.btn4v4');
button4v4.addEventListener('click', () => {
  num = 4;
});

const matchingButton = document.querySelector('.matching-btn');

matchingButton.addEventListener('click', () => {
  randerVersusViewer(num);
});
