const form = document.getElementById('form');
const addBtn = document.getElementById('increase');
const reduceBtn = document.getElementById('reduce');
const state = document.getElementById('state');
const addToCartBtn = document.getElementById('add-to-cart');
const productName = document.getElementById('productName');
const total = document.querySelector('.total');
const cartCounter = document.getElementById('cart-counter')
const clickedID = JSON.parse(localStorage.getItem('imgID'));
// console.log(clickedID)
const clickedImg = document.getElementById('clicked-img');
const imgTitle = document.querySelectorAll('.title');
const price = document.getElementById('price');
const cartFeedback = document.querySelector('.cart-feedback')

const images = [ 
    {name: 'calatrava1' , src:'./img/01.png', price: 1000, title:'Hydrogen'},
    {name: 'calatrava2' , src:'./img/02.png', price: 840, title:'Helium'},
    {name: 'calatrava3' , src:'./img/03.png', price: 300, title:'Lithium'},
    {name: 'calatrava4' , src:'./img/04.png', price: 700, title:'Beryllium'},
    {name: 'calatrava5' , src:'./img/05.png', price: 890, title:'Boron'},
]
localStorage.setItem('images', JSON.stringify(images))
const titles = ['Hydrogen', 'Helium', 'Lithium', 'Berrylium', 'Boron']




function findImg(clickedID){
    
    // iterate through images
    images.forEach((image) => {

        if (image.name === clickedID){
            console.log('found')
            clickedImg.src = image.src
            imgTitle.forEach((title) => {
                title.innerText = image.title
                price.innerText = image.price

            })


        } else {
            return;
        }
    })
}

function handleState(){
    state.value = 0;

    addBtn.addEventListener('click', (e) => {
        state.value ++;
        return 


    })

    reduceBtn.addEventListener('click', (e) => {
        state.value --
        
    })
}


handleState()

findImg(clickedID)


// count how many times user clicked submit
function countCartButtonClicks(){
    let numberOfSubmit = 0;
    addToCartBtn.addEventListener('click', (e) => {
        e.preventDefault()

        cartFeedback.classList.toggle('active')
        setTimeout(() => {
            cartFeedback.classList.toggle('active');
            cartFeedback.classList.add('deactivate')
        }, 2000)

        // currentCount --> number of items in cart
        let currentCount = ++numberOfSubmit;
        cartCounter.innerText = currentCount
        // currentPrice --> price from images-array
        let currentPrice = Number(price.innerText)
        let currentState = state.value
        let totalPrice = currentPrice * currentState;

        images.forEach((image) => {

            for (let [name, src] of Object.entries(image)){

                if(clickedID !== image.name){
                    return;
                }
                if (clickedID === image.name){
                    // create new object for name and price
                    const cartItem = {name: image.title, price: Number(image.price), amountSelected: currentState ,total: totalPrice}
                    localStorage.setItem(`${image.title}`, JSON.stringify(cartItem))
                    return;
                }
            }
        });


        console.log(totalPrice) 

    })
}

countCartButtonClicks()

