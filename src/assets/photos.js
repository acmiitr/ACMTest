import a from './images/gallery/a.jpg';
import b from './images/gallery/b.jpg';
import c from './images/gallery/c.jpg';
import d from './images/gallery/d.jpg';
import e from './images/gallery/e.jpg';
import f from './images/gallery/f.jpg';
import g from './images/gallery/g.jpg';
import h from './images/gallery/h.jpg';
import i from './images/gallery/i.jpg';
import A from './images/gallery/A.png';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
}

export const photos = shuffle([
  {
    src: a,
    width: 4, height: 3,
    title: 'Hi'
  },
  {
    src: b,
    width: 5, height: 4,
    title: 'yo'
  },
  {
    src: c,
    width: 3, height: 2
  },
  {
    src: d,
    width: 4, height: 3
  },
  {
    src: e,
    width: 5, height: 4
  },
  {
    src: f,
    width: 3, height: 2
  },
  {
    src: g,
    width: 4, height: 3
  },
  {
    src: h,
    width: 7, height: 5
  },
  {
    src: i,
    width: 4, height: 3
  },
  {src: A,
    width: 4, height: 3,
    title: 'Learn Unity Workshop'
  }
]);
