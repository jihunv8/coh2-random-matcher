import usfImage from './images/americans.png';
import sovImage from './images/soviet.png';
import brfImage from './images/british.png';
import okwImage from './images/OKW.png';
import ostImage from './images/wermacht.png';

const forces = [
  {
    code: 'USF',
    name: '미국',
    image: usfImage,
  },
  {
    code: 'SOV',
    name: '소련',
    image: sovImage,
  },
  {
    code: 'BRF',
    name: '영국',
    image: brfImage,
  },
  {
    code: 'OKW',
    name: '서독',
    image: okwImage,
  },
  {
    code: 'OST',
    name: '동독',
    image: ostImage,
  },
];

const _alliesIndex = [0, 2];
const _axisIndex = [3, 4];
export const alliesIndex = [..._alliesIndex];
export const axisIndex = [..._axisIndex];

function getRandomForce(position = 'random') {
  let max = 5;
  if (position === 'allies') {
    max = 3;
  } else if (position === 'axis') {
    max = 2;
  }

  let randomIndex = Math.floor(Math.random() * max);
  if (position === 'axis') {
    randomIndex += 3;
  }

  return { ...forces[randomIndex] };
}

export function getVersus(num = 1, ourForcesPosition = 'allies', enemiesPosition = 'axis') {
  const ourForces = [];
  const enemies = [];

  for (let i = 0; i < num; i++) {
    ourForces.push(getRandomForce(ourForcesPosition));
    enemies.push(getRandomForce(enemiesPosition));
  }

  return {
    ourForces,
    enemies,
    map: '(2) Faymonville Approach',
  };
}
