const items = document.querySelector(".lists");
const searchBar = document.querySelector(".searchTag");

let  searchTrips = [];
let filterTags = [];


//alternative fetch api to get data 
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



//searchBar filter 
function searchText(){

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
}




//fetch data from api
const loadTrips = async() => {
    try{
        const res = await fetch("https://trips-api-gateway.herokuapp.com/trips");
        searchTrips = await res.json();
       showTrips(searchTrips);
    }catch(err){
        console.log(err);
    }
};












//display data
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
                       <p class="collapse_" id="collapseTag" aria-expanded="false"> 
                          <button class="tab">${trip.tags[0]}</button>
                          <button class="tab"> ${trip.tags[1]}</button>
                          <button class="tab"> ${trip.tags[2]}</button>
                          <button class="tab"> ${trip.tags[3]}</button>
    
                       </p>
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
    const tag = document.getElementsByClassName("tab");
    


   const buttonTags = [...tag];
   
   

buttonTags.forEach( (tag) => {

        tag.addEventListener("click", (e) => {
            items.innerHTML = "";
            const targetText = e.target.innerHTML;
            filterTags.push(targetText);

            //array for clicked tags
            filterTags = [...new Set(filterTags)];
        
            setTripList(filterTags);
           
        }) 
        
    })


}


loadTrips();






function setTripList(filter){
  
     if(filter){
        filter.forEach((word) => {
            items.innerHTML = "";
            setTabs(filter);
        
            searchText(word);
          
        })
    }
}









function setTabs(tab){
    searchBar.innerHTML = "";
    return tab.forEach((item) => {
        createTaps(item)
    })
}



setTripList();


function createTaps(item){
    const tabEl = document.createElement("div");
    tabEl.classList.add("tabs");

    const para = document.createElement("p");
    para.innerHTML = item;
    tabEl.appendChild(para);

    const button = document.createElement("button");
    
    const cancleEl = document.createElement("div");
    cancleEl.classList.add("cancel");
    button.appendChild(cancleEl);
    tabEl.appendChild(button);

    button.addEventListener("click", (e) => {
        let text = e.target.closest(".tabs").querySelector("p").textContent;
        tabEl.remove();
        return setTripList(ccc(text));
    })
    return [searchBar.appendChild(tabEl)];

}




function ccc(text){
    filterTags = filterTags.filter((item) => {
        if(item != text){
            return item
        }
        console.log(item);
        console.log(text);
    }) 
    return [...filterTags];
}