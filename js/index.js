const form = document.querySelector('.form');
// const addBtn = document.getElementById('increase');
// const reduceBtn = document.getElementById('reduce');
// const state = document.getElementById('state');
// const cart = document.getElementById('cart');
const price = document.getElementById('price');
const clatarvaProducts = document.querySelectorAll('.calatrava');

// HOME DECOR
const hoverImg = document.querySelectorAll('.hover-img');
const imgPlaceholder= document.getElementById('image-placeholder')
// const prodImg = document.getElementById('prod-img')



export function productNaviagtor(){
    clatarvaProducts.forEach((product) => {
        
        product.addEventListener('click', (e) => {
            const imgID = product.id;
            console.log(imgID)
            localStorage.setItem('imgID', JSON.stringify(imgID))
            window.location.href = './product.html'
        })
    })
    
    
}


function productId(imgSrc){
    const prodImg = document.getElementById('prod-img');
    prodImg.src = imgSrc

}

productNaviagtor()



function addedToCart(val){

    

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const totalPrice = val * Number(price.innerText);
        cart.value  = totalPrice
    })
    

}



// HOVER IMAGE STYLES
function imageAnimation(){
    hoverImg.forEach((eachImg) => {
        eachImg.addEventListener('mouseover', (e) => {
            // alert('0000')
            imgPlaceholder.classList.add('animate-placeholder')
            imgPlaceholder.src = eachImg.src
        } )


        // if (imgPlaceholder.className === 'animate-placeholder'){
        //     imgPlaceholder.classList.remove('animate-placeholder')
        // }
        
        eachImg.addEventListener('mouseout', (e) => {
            imgPlaceholder.classList.remove('animate-placeholder')
        })
    })
}
imageAnimation()

// hoverImg.forEach((eachImg) => {
//     eachImg.addEventListener('')
// })