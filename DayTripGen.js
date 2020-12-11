   "use strict"

   let destinations = ["Navarre, Florida", "Dora, New-Mexico", "Loveland, Colorado", "Atlanta, Georgia"];
   let restaurant = ["Applebees", "Subway", "Outback", "I-Hop"];
   let transportation = ["Mustang", "Bike", "Snow-mobile", "Audi"];
   let randomNumber = Math.floor(Math.random() * entertainment.length);

  function destination() {
    
    let randomNumber = Math.floor(Math.random() * destinations.length);
    //once var was declared for math.floor random will only need it once
    let chosenDestination = destinations[randomNumber];
    return chosenDestination;
}

function restaurant() {
    
    let randomNumber = Math.floor(Math.random() * restaurant.length);
    let chosenRestaurant = restaurant[randomNumber];
    return chosenRestaurant;
}
function transportation() {
    
    let randomNumber = Math.floor(Math.random() * transportation.length);
    let chosenTransportation = transportation[randomNumber];
    return chosenTransportation;
}
function entertainment() {
    let entertainment = ["Hike", "movies", "swim", "dance"];
  
    let chosenEntertainment = entertainment[randomNumber];
    return chosenEntertainment;


}

function dayTrip() {
        let chosenDestination = destination();
        let chosenRestaurant = restaurant();
        let chosenTransportation = transportation();
        let chosenEntertainment = entertainment();
        let dayTrip = ("You will take a " + chosenTransportation + "to visit" + chosenRestaurant + " in the city of " + )
    }



}






function choosefirstCheck() {
let firstCheck = prompt("Different day trip?");
}


if(firstCheck === "yes"){
    function chooseDestination()



let completeBook = prompt("Complete booking click here");

}

completeBook



//if yes then re cycle through function choose destinations
//if no user wants to confirm day trip is complete if they like each selection




