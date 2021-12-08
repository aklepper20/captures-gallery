import DoubleLinkedList from "./dll.js";
import images from "./images.js";

const viewer = document.getElementById("viewer");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const heroImg = document.getElementById("hero-image");

const list = new DoubleLinkedList();

// console.log(images.length);
// if (list.length === 0) {
//   heroImg.innerHTML = "nothing to show";
// }
console.log(images);
//Change to favorites array

images.forEach((image) => list.push(image));

let idx = 0;

next.addEventListener("click", function () {
  if (idx >= list.length - 1) {
    idx = 0;
    viewer.src = list.getNodeAtIndex(idx).value;
  } else {
    idx++;
    viewer.src = list.getNodeAtIndex(idx).value;
  }
});

prev.addEventListener("click", function () {
  if (idx === 0) {
    idx = list.length - 1;
    viewer.src = list.getNodeAtIndex(idx).value;
  } else {
    idx--;
    viewer.src = list.getNodeAtIndex(idx).value;
  }
});

let galleryArray = [
  "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const galleryContainer = document.getElementById("gallery");
renderImg();
const uploadBtn = document.getElementById("upload-btn");
let favoriteBtn = document.querySelectorAll(".far");

if (galleryArray.length == 0) {
  galleryContainer.innerHTML = "No images";
}

function renderImg() {
  let htmlString = "";
  for (let i = galleryArray.length - 1; i >= 0; i--) {
    const newImg = `<div class="card-container"><image class="card" src=${galleryArray[i]} alt="Gallery Image"/>  <i class="far fa-heart fa-2x favorite"></i></div>`;
    htmlString += newImg;
  }
  galleryContainer.innerHTML = htmlString;
}

uploadBtn.addEventListener("change", (event) => {
  let input = event.target.value;
  galleryArray.push(input);
  renderImg();
});

let cardContainer = document.querySelectorAll(".card-container");
let imgSrc;

function setHandler(favoriteTheme) {
  cardContainer.forEach((cardElement) => {
    cardElement.addEventListener("click", () => {
      imgSrc = cardElement.children[0].src;

      if (favoriteTheme == true) {
        console.log("we removed");
        for (let i = 0; i < list.length; i++) {
          if (list.getNodeAtIndex(i).value == imgSrc) {
            list.removeAtIndex(i);
          }
        }
      } else {
        list.push(imgSrc);
        favoriteTheme = true;
        console.log("we pushed");
      }

      console.log(list);
    });
  });
}

favoriteBtn.forEach((btn) => {
  let favoriteTheme = false;

  btn.addEventListener("click", () => {
    if (favoriteTheme == false) {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
      setHandler(favoriteTheme);
      favoriteTheme = true;
    } else {
      btn.style.backgroundColor = "";
      btn.style.color = "";
      favoriteTheme = false;
    }
  });
});
console.log(images);
