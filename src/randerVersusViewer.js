import { getVersus } from './randomMatcher';
import Force from './components/Force';

const ourForces = document.querySelector('.our-forces');
const enemies = document.querySelector('.enemies');

function removeAllChild(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function randerVersusViewer(num = 1) {
  const versus = getVersus(num);
  removeAllChild(ourForces);
  removeAllChild(enemies);

  versus.ourForces.forEach((force) => {
    const li = document.createElement('li');
    li.append(Force(force.name, force.image));
    ourForces.append(li);
  });

  versus.enemies.forEach((force) => {
    const li = document.createElement('li');
    li.append(Force(force.name, force.image));
    enemies.append(li);
  });
}

export default randerVersusViewer;
