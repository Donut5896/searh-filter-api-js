const items = document.querySelector(".lists");
const searchBar = document.querySelector("#search");

let users = []


//fetch api to get data and assign to variable "trips"
async function fetchTrip(){
    const response = await fetch("https://trips-api-gateway.herokuapp.com/trips");
    const trips = await response.json();
     showTrips(trips)
}
fetchTrip()
.then(response => {
    console.log("success")
})
.catch(error => {
    console.log('error');
    console.log(error);
})





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
               
               <div class="description" id="module">
                   <p class="collapse" id="collapseId" aria-expanded="false">${trip.description}</p>
                   <a role="button" class="collapsed" data-toggle="collapse" href="${trip.url}" aria-expanded="false" > 
                    </a>
                </div>
           
               <div class="hashtags">
                   <p>หมวดหมู่: </p>
                   <span class="tag" id="dots">
                       <p class="collapse_Tag" id="collapseTag" aria-expanded="false"> ${trip.tags}</p>
                       <a role="button" class="collapseDot" data-toggle="collapse" href="collapseTag" aria-expanded="false" aria-controls="collapseTag"> 
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






