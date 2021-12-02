import DoubleLinkedList from './dll.js';
import images from './images.js';

const viewer = document.getElementById('viewer');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const list = new DoubleLinkedList();

images.forEach((image) => list.push(image));
console.log(list);

let idx = 0;

next.addEventListener('click', function () {
    if (idx >= list.length - 1) {
      idx = 0;
      viewer.src = list.getNodeAtIndex(idx).value;
    } else {
      idx++;
      viewer.src = list.getNodeAtIndex(idx).value;
    }
  });

  prev.addEventListener('click', function () {
    if (idx === 0) {
      idx = list.length - 1;
      viewer.src = list.getNodeAtIndex(idx).value;
    } else {
      idx--;
      viewer.src = list.getNodeAtIndex(idx).value;
    }
  });