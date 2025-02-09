import weeklySchedule from '../calender.json' assert {type: 'json'};
const calender = weeklySchedule.weeklySchedule;
const textContent = document.querySelectorAll('.text-content');
const body = document.querySelector('body');
const hotelName = document.querySelector('.hotel-name')

// FORM
const formContainer = document.getElementById('navigate')
const form = document.querySelector('.form');
const formPlaceholder = document.getElementById('form-placeholder')

const addBtn = document.getElementById('addBtn');
const reduceBtn = document.getElementById('reduceBtn');
const price = document.getElementById('form-price');
const nights = document.getElementById('nights');
const priceByNights = document.getElementById('total');

const availableContainer = document.createElement('div');
const unAvailableContainer = document.createElement('div');

function checkStatus(){
    calender.forEach((eachDay) => {
        // if (eachDay.status === 'Y'){
        //     // console.log(eachDay)


        //     // render DOM
        //     const cardContainer = document.createElement('div')
        //     const hotelName = document.createElement('h3');
        //     const status = document.createElement('p');
        //     const infoContainer = document.createElement('div');
        //     const price = document.createElement('p');
        //     const location = document.createElement('p');
        //     const bookNow = document.createElement('a');
        //     const imgContainer = document.createElement('div')
        //     const img = document.createElement('img');

        //     bookNow.setAttribute('id', `${eachDay.hotel}`)
        //     bookNow.setAttribute('class', `rendered-links`)
        //     bookNow.href = '#'

        //     hotelName.innerText = ` ${eachDay.hotel}`
        //     status.innerText = `Available till ${eachDay.day}`
        //     location.innerText = `Location: ${eachDay.location}`
        //     price.innerText = `Price: £${eachDay.price.amount} per night`
        //     img.src = eachDay.imageUrl
        //     bookNow.innerText = `Book Now`

        //     cardContainer.classList.add('render-card');
        //     imgContainer.classList.add('render-img-container')
        //     infoContainer.classList.add('render-info-container')
        //     availableContainer.classList.add('render-scroll-container')

        //     imgContainer.appendChild(img)

        //     infoContainer.appendChild(status);
        //     infoContainer.appendChild(price);
        //     infoContainer.appendChild(location);
            
        //     cardContainer.appendChild(hotelName);
        //     cardContainer.appendChild(imgContainer);
        //     cardContainer.appendChild(infoContainer)
        //     cardContainer.appendChild(bookNow);

        //     availableContainer.appendChild(cardContainer)

        //     document.querySelector('main').appendChild(availableContainer)
        // }


        if(eachDay.status === 'N') {
            const cardContainer = document.createElement('div')
            const hotelName = document.createElement('h3');
            const status = document.createElement('p');
            const infoContainer = document.createElement('div');
            const price = document.createElement('p');
            const location = document.createElement('p');
            const bookNow = document.createElement('a');
            const imgContainer = document.createElement('div')
            const img = document.createElement('img');



            bookNow.setAttribute('id', `${eachDay.hotel}`)
            bookNow.setAttribute('class', `rendered-links`)
            bookNow.href = '#'

            hotelName.innerText = ` ${eachDay.hotel}`
            status.innerText = `Not available till ${eachDay.day}`
            location.innerText = `Location: ${eachDay.location}`
            price.innerText = `Price: £${eachDay.price.amount} per night`;
            img.src = eachDay.imageUrl
            bookNow.innerText = `Make reservation`

            cardContainer.classList.add('render-card')
            cardContainer.style.setProperty("--before-color", "rgb(255, 191, 0)")

            imgContainer.classList.add('render-img-container')
            infoContainer.classList.add('render-info-container');
            unAvailableContainer.classList.add('render-scroll-container')
            imgContainer.appendChild(img)

            infoContainer.appendChild(status);
            infoContainer.appendChild(price);
            infoContainer.appendChild(location);
            
            cardContainer.appendChild(hotelName);
            cardContainer.appendChild(imgContainer);
            cardContainer.appendChild(infoContainer)
            cardContainer.appendChild(bookNow);

            unAvailableContainer.appendChild(cardContainer)


            document.querySelector('main').appendChild(unAvailableContainer)

        }


        if (eachDay.status === 'Y'){
            // console.log(eachDay)


            // render DOM
            const cardContainer = document.createElement('div')
            const hotelName = document.createElement('h3');
            const status = document.createElement('p');
            const infoContainer = document.createElement('div');
            const price = document.createElement('p');
            const location = document.createElement('p');
            const bookNow = document.createElement('a');
            const imgContainer = document.createElement('div')
            const img = document.createElement('img');

            bookNow.setAttribute('id', `${eachDay.hotel}`)
            bookNow.setAttribute('class', `rendered-links`)
            bookNow.href = '#'

            hotelName.innerText = ` ${eachDay.hotel}`
            status.innerText = `Available till ${eachDay.day}`
            location.innerText = `Location: ${eachDay.location}`
            price.innerText = `Price: £${eachDay.price.amount} per night`
            img.src = eachDay.imageUrl
            bookNow.innerText = `Book Now`

            cardContainer.classList.add('render-card');
            imgContainer.classList.add('render-img-container')
            infoContainer.classList.add('render-info-container')
            availableContainer.classList.add('render-scroll-container')

            imgContainer.appendChild(img)

            infoContainer.appendChild(status);
            infoContainer.appendChild(price);
            infoContainer.appendChild(location);
            
            cardContainer.appendChild(hotelName);
            cardContainer.appendChild(imgContainer);
            cardContainer.appendChild(infoContainer)
            cardContainer.appendChild(bookNow);

            availableContainer.appendChild(cardContainer)

            document.querySelector('main').appendChild(availableContainer)
        }


    })
}


function calculateTotalCostOfPurchase(){
    // leave current state in global scope for update syncs check closure functions 
    const hotelPrice  = Number(price.innerText);
    let currentTotal = Number(priceByNights.value);

    let currentNights = nights.value

    addBtn.addEventListener('click',(e) => {
         nights.value = ++currentNights
         let updatedTotal = hotelPrice * currentNights;
         priceByNights.value = updatedTotal


         if (currentNights > 0){
            reduceBtn.disabled = false
        }

    })

    reduceBtn.addEventListener('click', (e) => {
        --nights.value;
        nights.value = --currentNights
        let updatedTotal = hotelPrice * currentNights;
        priceByNights.value = updatedTotal

        if (currentNights === 0){
            reduceBtn.disabled = true
        }

    })
}


function populateForm(){
    // listen for link clicks
    const bookNowLinks = document.querySelectorAll('.rendered-links');
    bookNowLinks.forEach((eachLink) => {        
        eachLink.addEventListener('click', (e) => {
            formContainer.classList.toggle('active-form')

            let clickedLink = eachLink.id

            calender.forEach((eachDay) => {
                if (clickedLink !== eachDay.hotel){
                    return;
                }
                formPlaceholder.src = eachDay.imageUrl
                hotelName.innerText = eachDay.hotel
                priceByNights.value = eachDay.price.amount
                price.innerText = eachDay.price.amount;
                calculateTotalCostOfPurchase()
                
    
            })
        })
    })
}
 
checkStatus()
// calculateTotalCostOfPurchase()
populateForm()

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formContainer.classList.toggle('active-form')
})