const form = document.querySelector('.form');
const addBtn = document.getElementById('increase');
const reduceBtn = document.getElementById('reduce');
const state = document.getElementById('state');
const cart = document.getElementById('cart');
const price = document.getElementById('price');
const clatarvaProducts = document.querySelectorAll('.calatrava');
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

// export const runFunc = productNaviagtor();
// console.log(runFunc)
    

function handleState(){
    state.value = 0;

    addBtn.addEventListener('click', (e) => {
        state.value ++;
        cart.value = state.value
        addedToCart(cart.value)

        return cart.value


    })

    reduceBtn.addEventListener('click', (e) => {
        state.value --
        cart.value = state.value
        addedToCart(cart.value)
        return cart.value
        
    })
}


handleState();



function addedToCart(val){

    

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const totalPrice = val * Number(price.innerText);
        cart.value  = totalPrice
    })
    

}
