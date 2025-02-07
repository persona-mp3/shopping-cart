import imagesJSON from '../images.json' assert {type: 'json'}
const images = imagesJSON.images;
const titles = imagesJSON.titles;
const body = document.querySelector('body')
// console.log(images)

// const title = document.querySelector('.title');
// const price = document.querySelector('.price');
// const amount = document.querySelector('amount');

const cart= []

function returnLocalStorageCart(){
    titles.forEach((title) => {
        Object.keys(localStorage).forEach((key) => {
    
            if (title !== key){
                return;
            } 
    
            if (title === key){
                const item = (JSON.parse(localStorage.getItem(key)))
                cart.push(item)
            }
        })
    })
    
    
}


document.addEventListener('DOMContentLoaded', async (e) => {
    returnLocalStorageCart()

    cart.forEach((item) => {
        images.forEach((image) => {
    
            if (item.name === image.title){

                const cardContainer = document.createElement('div');
                const infoContainer = document.createElement('div');
                const imgContainer = document.createElement('div');
                const title = document.createElement('p');
                const price = document.createElement('p');
                const amount = document.createElement('p');
                const total = document.createElement('p');
                const photo = document.createElement('img');


                title.innerText = `${image.title}`;
                price.innerText = `Price: £${image.price}`;
                amount.innerText = `Amount: ${item.amountSelected}`
                total.innerText =`Total: (${item.amountSelected} x ${image.price}) = £${item.total}`
                photo.src = image.src;

                // STYLES
                cardContainer.classList.add('render-card-container')
                imgContainer.classList.add('render-imgContainer')
                photo.classList.add('render-photo')
                infoContainer.classList.add('render-infoContainer')

               infoContainer.appendChild(title);
               infoContainer.appendChild(imgContainer)
               infoContainer.appendChild(price);
               infoContainer.appendChild(amount);
               infoContainer.appendChild(total);

               imgContainer.appendChild(photo);

               cardContainer.appendChild(infoContainer);
               cardContainer.appendChild(imgContainer);

               body.appendChild(cardContainer)

                

            
            } else {
                return;
            }
        })
    })
    
    console.log(cart)
});


// cart.forEach((item) => {
//     // if name in cart is same as title in database(images), create image, title, price and amount
//     for (let [name, value] of Object.entries(item)){

//         images.forEach((image) => {
//             for (let [title] of Object.entries(image)){

//                 if (name === )
//             }
//         })
//     }
// })


// cart.forEach((item) => {
//     console.log(item)
//     images.forEach((image) => {

//         if (item.name === image.title){
//             console.log('true', image.name)
//         } else {
//             console.log('hih')
//         }
//     })
// })
