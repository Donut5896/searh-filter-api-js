const items = document.querySelector(".lists");
const searchBar = document.getElementById("search");




//fetch api to get data and assign to variable "trips"
/*async function fetchTrip(){
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
})*/


let  searchTrips = [];

searchBar.addEventListener("keyup", e => {
    const searchString = e.target.value;
    const filteredTrips =  searchTrips.filter(trip => {
    return (
        trip.title.includes(searchString) ||
        trip.description.includes(searchString)||
        trip.tags.includes(searchString)
    );
    
});
    showTrips(filteredTrips);
  
})










const loadTrips = async() => {
    try{
        const res = await fetch("https://trips-api-gateway.herokuapp.com/trips");
        searchTrips = await res.json();
       showTrips(searchTrips);
    }catch(err){
        console.log(err);
    }
};








const showTrips = (trips) => {
    const output = trips
        .map((trip) => {
        
        return ` 
            <li class="container-list">
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
                   <a role="button" class="collapsed" data-toggle="collapse" href="${trip.url}" aria-expanded="false"> 
                    </a>
                </div>
           
               <div class="hashtags" id="hashtags">
                   <h5>หมวดหมู่: </h5>
                   <span class="tag" id="dots">
                       <p class="collapse_" id="collapseTag" aria-expanded="false"> ${trip.tags}</p>
                       <a role="button" class="collapseDot" data-toggle="collapse_" href="${trip.url}" aria-expanded="false" > 
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
        }).join('');
    
    items.innerHTML = output;

}

loadTrips();




// function myFunction(){

//     let input, filter, element, span, p, tag, i;
//     input = document.getElementById("search");

//     filter = input.value.toUpperCase();
  
//     //tag_div = document.getElementById("hashtags");
//     //console.log(tag_div)
//     // element = document.querySelector(".hashtags");
//     // console.log(element)
//     // span=  element.querySelector(".tag"); 
//     // console.log(span)
//     // p = span.getElementByClassName("collapse_");

//     p = document.getElementsByClassName("collapse_");
 


//     for( i=0; i< p.lenght; i++){
//             tag = p[i]
          
//        if( tag.innerHTML.toUpperCase().indexOf(filter)===0){
//             p[i].style.display = "";
//             console.log(tag)
//        }else{
//            p[i].style.display = "none";
//  console.log(tag)
//        }
   
//     }


// }

