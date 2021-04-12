const items = document.querySelector(".lists");
const searchBar = document.querySelector("#search");

let users = []


//fetch api to get data and assign to variable "trips"
async function fetchTrip() {

    await fetch("https://trips-api-gateway.herokuapp.com/trips")
    .then(res => {
        res.json()
        .then(res => {
            trips = res
            console.log(trips)
            showTrips(trips)
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}




const showTrips = arr => {
    let output = "";

    arr.forEach((trip) => {
       output += `<li class="container-list">
       <div class="image-card">
           <img src=${trip.photos[0]} alt="" />
       </div>

       <div class="contents">
           <div class="content">
               <div class="title">
                   <h2>${trip.title}</h2>
               </div>
               <div class="description" id="description">
                   ${trip.description}
               </div>
           
               <div class="hashtags">
                   <span>หมวดหมู่: </span>
                   <span class="tag">
                       <p>${trip.tags}</p>
                   </span>
               </div>
              
              
               <div class="images-slide">
            
                   <div class="slide">
                       <img src=${trip.photos[1]} />
                       <img src=${trip.photos[2]} />
                       <img src=${trip.photos[3]} />
                    </div>  
               </div>
            </div> 
       </div>
   </li>`
    })
    items.innerHTML = output
}


document.addEventListener("DOMContentLoaded", fetchTrip);







/*let shortCentent = [];
let maxheight = '';

window.onload = function() {
    shortCentent = document.getElementsByClassName("description");

    if(shortCentent.length > 0) {
        maxheight = window.getComputedStyle(shortCentent[0]).getPropertyValue('max-height')
        maxheight = parseInt(maxheight.replace('px', ''))

     //add read-more button to each content
     for(let i=0; shortCentent.length; i++){
         let el = document.createElement("button");
         el.innerHTML = "Read More";
         el.setAttribute("type", "button");
         el.setAttribute("class", "read-more hid");

        // insertAfter(shortCentent[i], el);
     }   
    }
    //add click function to buttons
    let readmoreButton = document.getElementsByClassName("read-more");
    for(let i=0; i< readmoreButton.length; i++){
        readmoreButton[i].addEventListener("click", function(){
            revealThis(this);
        }, false);
    }
    //ubdate buttons so only needed one show
    updateReadMore();
}


//show only the nassasary read more buttons
function updateReadMore(){
    if(shortCentent > 0){
        for(let i = 0; i < shortCentent.length; i++){
            if(shortCentent[i].scrollHeight > maxheight){
                if(shortCentent[i].hasAttribute("style")){
                    updateHeight(shortCentent[i]);
                }
                shortCentent[i].nextElementSibling.className = "read-more";
            }else{
                shortCentent[i].nextElementSibling.className = "read more hid";

            }
        }
    }
}



function revealThis(current){
    let el = current.previousElementSibling;
    if(el.hasAttribute("style")){
        current.innerHTML = "Read More";
        el.removeAttribute("style");
    }else{
        updateHeight(el);
        current.innerHTML = "show Less";
    }
}

function updateHeight(el){
    el.style.maxHeight = el.scrollHeight + "px";
}

*/