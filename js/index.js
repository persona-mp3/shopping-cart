import imagesJSON from '../images.json'  assert {type: 'json'}
const images = imagesJSON.images;
const titles = imagesJSON.titles;

const form = document.querySelector('.form');
const price = document.getElementById('price');
const clatarvaProducts = document.querySelectorAll('.calatrava');
const calatravaImg = document.querySelectorAll('.calatrava-img')
const calatravaContainer = document.querySelector('.product-container')
const calatravaPlaceholder = document.querySelector('.calatrava-placeholder')

const sideNav = document.querySelector('.side-nav');
const menuToggle = document.querySelector('.menu-toggle')

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
function wabisSabiAnimation(){
    hoverImg.forEach((eachImg) => {
        eachImg.addEventListener('mouseover', (e) => {
            // alert('0000')
            imgPlaceholder.classList.add('animate-placeholder')
            imgPlaceholder.src = eachImg.src
        } )
        
        eachImg.addEventListener('mouseout', (e) => {
            imgPlaceholder.classList.remove('animate-placeholder')
        })
    })

}

const imgTitle = document.getElementById('imgTitle')

function calatravaAnimation(){
    calatravaImg.forEach((eachImg) => {

        images.forEach((image) => {

            eachImg.addEventListener('mouseover', (e) => {
                calatravaPlaceholder.src = eachImg.src
                calatravaContainer.classList.add('animate-calatrava')
    
                if (eachImg.id === image.name){
                    imgTitle.innerText = image.title
                } else {
                    return;
                }
                
    
            })
    
            eachImg.addEventListener('mouseout', (e) => {
                calatravaPlaceholder.classList.remove('animate-calatrava')
            })
    
    

        })
        // eachImg.addEventListener('mouseover', (e) => {
        //     calatravaPlaceholder.src = eachImg.src
        //     calatravaContainer.classList.add('animate-calatrava')

            
            

        // })

        // eachImg.addEventListener('mouseout', (e) => {
        //     calatravaPlaceholder.classList.remove('animate-calatrava')
        // })

    })

}


menuToggle.addEventListener('click', (e) => {
    sideNav.classList.toggle('active-side-nav')
    menuToggle.classList.toggle('active-toggle')
})
calatravaAnimation()
wabisSabiAnimation()

