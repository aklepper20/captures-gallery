galleryArray = [
    'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
]

const galleryContainer = document.getElementById('gallery');
renderImg();
const uploadBtn = document.getElementById('upload-btn');
const favoriteBtn = document.querySelectorAll('.far');

for(let i = 0; i < favoriteBtn.length; i++) {
    let btn = favoriteBtn[i];
    let favoriteTheme = false;

    btn.addEventListener('click', () => {
        if (favoriteTheme == false) {
            btn.style.backgroundColor = 'red';
            favoriteTheme = true;
        } else {
            btn.style.backgroundColor = '';
            favoriteTheme = false;
        }
    })
}

uploadBtn.addEventListener('change', (event) => {
    let input = event.target.value;
    galleryArray.push(input);
    renderImg();
    input = '';
})

function renderImg() {
    let htmlString = '';
    for (let i = galleryArray.length - 1; i >= 0; i--) {
        const newImg =   `<div id="card-container"> <image class="card" src=${galleryArray[i]} alt="Gallery Image"/> <i class="far fa-heart fa-2x favorite"></i></div>`;
        htmlString += newImg;
    }
    galleryContainer.innerHTML = htmlString;   
}


console.log('hi')
//within listener, create html for each photo that is for each item
//loop through to put them on the dom
//make the gallery.innerHTML = the string of the looped items
