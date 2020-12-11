   "use strict"

   let destinations = ["Navarre, Florida", "Dora, New-Mexico", "Loveland, Colorado", "Atlanta, Georgia"];
   let restaurant = ["Applebees", "Subway", "Outback", "I-Hop"];
   let transportation = ["Mustang", "Bike", "Snow-mobile", "Audi"];
   let randomNumber = Math.floor(Math.random() * entertainment.length);


   let userTrip = [ getRandomElement(destinations), getRandomElement(transportation), getRandomElement(restaurant), getRandomElement(activities) ];

   console.log("Here is your trip: \nYou will go to: " + userTrip[0] + "\nYou you will travel by: " + userTrip[1] + "\nYou will eat at: " + userTrip[2] + "\nFor entertainment you will: " + userTrip[3])


let userInput = "";

   while(true){

    while(true){
        userInput = prompt("Would you like to change anything about your trip? yes/no:");
         userInput = userInput.toLowerCase();
        if(userInput.charAt(0) === "y"){
            break
        }
        else if(userInput.charAt(0) === "n"){
            break
        }
        else{

        }
    }

    if(userInput.charAt(0) === "y"){
        
        while (true){
        userInput = prompt("What would you like to change?: \n1) Destination \n2) Transportation \n3) Restaruant \n4) Entertainment")
        
        if(isNaN(userInput)){
            
        }
        else{
            userInput = parseInt(userInput);
            break;
        }
        }

        if(userInput === 1){
            userTrip[0] = getRandomElement(destinations);
        }
        else if(userInput === 2){
            userTrip[1] = getRandomElement(transportation);
        }
        else if(userInput === 3){
            userTrip[2] = getRandomElement(restaurant);
        }
        else if(userInput === 4){
            userTrip[3] = getRandomElement(activities);
        }
    }
    else{
        userInput = prompt("Does your trip look good then? yes/no: ");
        if(userInput.charAt(0) === "y"){
            break;
        }
        else{
            
        }
    }

    console.log("Here is your trip: \nYou will go to: " + userTrip[0] + "\nYou you will travel by: " + userTrip[1] + "\nYou will eat at: " + userTrip[2] + "\nFor entertainment you will: " + userTrip[3]);
} 

console.log("Here is your confirmed trip: \nYou will go to: " + userTrip[0] + "\nYou you will travel by: " + userTrip[1] + "\nYou will eat at: " + userTrip[2] + "\nFor entertainment you will: " + userTrip[3]);


function getRandomElement(arrayToGrab){
    let randomElement = arrayToGrab[Math.floor(Math.random() * arrayToGrab.length)];

    return randomElement;
}

