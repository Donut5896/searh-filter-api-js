const items = document.querySelector(".lists");
const searchBar = document.querySelector("#search");

let users = []


//fetch api to get data and assign to variable "trips"
async function fetchTrip(){
    const response = await fetch("https://trips-api-gateway.herokuapp.com/trips");
    const trips = await response.json();
     showTrips(trips)



     //filterable function
    searchBar.addEventListener("input", e => {
    const element = e.target.value
    const newTrip = []
    
    trips.filter(trip => {
        if(trip.title.includes(element)){
            newTrip.push(trip.title)
            showTrips(newTrip) 
        }else if(trip.tags.includes(element)){
            newTrip.push(trip.tags)
            showTrips(newTrip) 
        }else if(trip.description.includes(element)){
            newTrip.push(trip.description)
            showTrips(newTrip) 
        }else{
            console.log('no matched trip')
        }
        
    })
   
 
})


}
fetchTrip()
.then(response => {
    console.log("success")
})
.catch(error => {
    console.log('error');
    console.log(error);
})



//make the list filterable




const showTrips = arr => {
    let output = "";

    arr.forEach(({ tags, photos, title, description, url}) => 
    (output += `<li class="container-list">
       <div class="image-card">
           <img src=${photos[0]} alt="" />
       </div>

       <div class="contents">
           <div class="content">
               <div class="title">
                   <h2>${title}</h2>
               </div>
               
               <div class="description" id="module">
                   <p class="collapse" id="collapseId" aria-expanded="false">${description}</p>
                   <a role="button" class="collapsed" data-toggle="collapse" href="${url}" aria-expanded="false"> 
                    </a>
                </div>
           
               <div class="hashtags">
                   <h5>หมวดหมู่: </h5>
                   <span class="tag" id="dots">
                       <p class="collapse_" id="collapseTag" aria-expanded="false"> ${tags}</p>
                       <a role="button" class="collapseDot" data-toggle="collapse_" href="${url}" aria-expanded="false" > 
                   </span>
               </div>
              
              
               <div class="images-slide">
            
                   <div class="slide">
                       <img src=${photos[1]} />
                       <img src=${photos[2]} />
                       <img src=${photos[3]} />
                    </div>  
               </div>
            </div> 
       </div>
   </li>`
    )
    )
    items.innerHTML = output
    
}


document.addEventListener("DOMContentLoaded", fetchTrip);




