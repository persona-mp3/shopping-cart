import imagesJSON from '../images.json'  assert {type: 'json'}
const images = imagesJSON.images;
const titles = imagesJSON.titles;
const body = document.querySelector('body')
const payBtn = document.createElement('button')


const cart= []
const updatedCart = []
let  updateTotal = 0

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


let totalPrice = document.createElement('p')


document.addEventListener('DOMContentLoaded', async (e) => {
    returnLocalStorageCart()

    cart.forEach((item) => {
        images.forEach((image) => {
            // console.log(item)
    
            if (item.name === image.title){

                // DOM RENDERING

                const cardContainer = document.createElement('div');
                const infoContainer = document.createElement('div');
                const imgContainer = document.createElement('div');
                const title = document.createElement('p');
                const price = document.createElement('p');
                const amount = document.createElement('p');
                const total = document.createElement('input');
                const photo = document.createElement('img');
                const btnContainer = document.createElement('div')
                const reduceBtn = document.createElement('button');
                const addBtn = document.createElement('button');
                // const payBtn = document.createElement('button')
                // const totalPrice = document.createElement('p');


                title.innerText = `${image.title}`;
                price.innerText = `Price: £${image.price}`;
                amount.innerText = `Amount: x${item.amountSelected}`
                total.value =`Total: £${item.total}`
                photo.src = image.src;
                reduceBtn.innerText = '-';
                addBtn.innerText = '+';
                payBtn.innerText = 'Checkout'
                // STYLES
                cardContainer.classList.add('render-card-container')
                imgContainer.classList.add('render-imgContainer')
                photo.classList.add('render-photo')
                infoContainer.classList.add('render-infoContainer')
                btnContainer.classList.add('render-btnContainer')
                addBtn.classList.add('render-btn')
                reduceBtn.classList.add('render-btn')
                payBtn.classList.add('render-payBtn')
                total.classList.add('render-amt')
                



               infoContainer.appendChild(title);
               infoContainer.appendChild(imgContainer)
               infoContainer.appendChild(price);
               infoContainer.appendChild(amount);
               infoContainer.appendChild(total);
               // btn container
               btnContainer.appendChild(reduceBtn);
               btnContainer.appendChild(addBtn);

               infoContainer.appendChild(btnContainer);

               imgContainer.appendChild(photo);

               cardContainer.appendChild(infoContainer);
               cardContainer.appendChild(imgContainer);

               body.appendChild(cardContainer)
               body.appendChild(payBtn)


                // ALLOW CHANGES IN FINAL CART SECTION, UPDATES CART JSON, TOTAL
               let currentAmount = Number(item.amountSelected)

               addBtn.addEventListener('click', (e) => {
                console.log(++currentAmount)
                // update json
                item.amountSelected = currentAmount
                item.total = item.amountSelected * item.price

                // console.log(item)
                localStorage.setItem(`${image.title}`, JSON.stringify(item))


                amount.innerText =`Amount: x${currentAmount}`
                total.value =`Total: £${item.total}`

                
                if (currentAmount > 0){
                    reduceBtn.disabled = false
                    reduceBtn.innerText = '-'
                }

               })

               reduceBtn.addEventListener('click', (e) => {
                // console.log(--currentAmount);
                
                item.amountSelected = --currentAmount
                item.total = item.amountSelected * item.price


                // console.log(item)

                amount.innerText =`Amount: x${currentAmount}`
                total.value =`Total: £${item.total}`
                localStorage.setItem(`${image.title}`, JSON.stringify(item))

                if(item.amountSelected === 0) {
                    reduceBtn.disabled = true;
                    reduceBtn.innerText = 'Remove'
                }

                })

            } else {
                return;
            }
        })
    })
    
    // let totalPurchase
    let totalPurchaseArray = []
    let total = 0

    let totalPrice = document.createElement('p')
    payBtn.addEventListener('click', (e) => {

        titles.forEach((title) => {
            // check if it's in the cart
            cart.forEach((item) => {
    
                if ( title !== item.name){
                    console.log(title)
                    return;
                } 
    
                if (title === item.name) {
                    total = total + item.total
                    totalPrice.innerText = `Total :£${total}.00`
                    totalPrice.classList.add('render-totalPrice')
            
                    body.appendChild(totalPrice)
            
                    console.log(total)
                    // console.log(item.total)
                }
            })
        })
    })
   
});
