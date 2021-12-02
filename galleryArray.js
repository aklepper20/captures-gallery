galleryArray = [
    'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
]

const galleryContainer = document.getElementById('gallery');
const uploadBtn = document.getElementById('upload-btn');
let uploadImg = '';

// uploadBtn.addEventListener('change', function() {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => {
//         uploadImg = reader.result
//         console.log(uploadImg)
//         galleryArray.push(uploadImg)
        
//         // document.getElementById('gallery').style.backgroundImage = `url(${uploadImg})`
//     })
//     reader.readAsDataURL(this.files[0])
// })

// function createImg() {
//     return
//             `<div class="img-card">
//                 <img src='' alt="Gallery Image"/>
//             </div>
//             `
// }

function renderImg() {
    let htmlString = '';
    for (let i = galleryArray.length - 1; i >= 0; i--) {
        const newImg =   `<div class="img-card">
                            <img class="card" src=${galleryArray[i]} alt="Gallery Image"/>
                          </div>
                         `
        htmlString += newImg;
    }
    galleryContainer.innerHTML = htmlString
}
renderImg()

console.log('hi')
//within listener, create html for each photo that is for each item
//loop through to put them on the dom
//make the gallery.innerHTML = the string of the looped items