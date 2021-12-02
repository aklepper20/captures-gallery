import DoubleLinkedList from './dll.js';
import images from './images.js';

const viewer = document.getElementById('viewer');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const list = new DoubleLinkedList();

//Change to favorites array
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

  //If a button is 'liked', then push it into the favorites array. That goes through the dll up on top

  //have array that uploads images from an upload button and pushes/displays it in the captures gallery. 
  //Use back ticks and roll out.

  //when clicked, a module of the photo pops up
  //when back arrow is clicked, it takes you back to the display page.