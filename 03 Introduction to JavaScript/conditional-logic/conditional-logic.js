//setting our initial variables
let weather = "sunny";
let wind = 20;
let isStorm = false;

//obtaining our HTML element to change based on our conditions
let update = document.getElementById("weather");

// // IF/ELSE STATEMENT
// // if/else statement checking the weather and wind variables and changing the HTML
// if (weather == "raining" || weather == "Raining"){
//     update.innerHTML = "It's raining. Best not put out any washing.";
// }
// else if (weather == "snowing" || weather == "Snowing") {
//     update.innerHTML = "It's snowing! Washing won't dry outside today.";
// }
// else if (!(wind < 30)){
//     update.innerHTML = "It's very windy! Your washing might blow away.";
// }
// else if (weather == "sunny" && wind >= 10) {
//     update.innerHTML = "Sun and a breeze! Perfect day for drying washing.";
// }
// else {
//     update.innerHTML = "It's dry outside! Time to put out the washing.";
// }



// // TERNARY OPERATOR
// // ternary operator checking for rain and high winds; sets isStorm bool to true if both
// weather == "raining"|| weather == "Raining" && wind > 30 ? 
// isStorm = true : isStorm = false;

// // changes HTML based if isStorm is true; does nothing if false
// isStorm ? update.innerHTML = "There's a storm! Stay inside today." : null ;




// // BASIC SWITCH STATEMENT
// switch (weather) {
//     case "raining" || "Raining":
//         update.innerHTML = "It's raining! Don't forget your coat and umbrella!";
//         break;
//     case "snowing" || "Snowing":
//         update.innerHTML = "It's snowing! Don't forget your scarf and gloves!";
//         break;
//     case "sunny":
//         update.innerHTML = "It's sunny! Don't forget your sun cream and sunglasses! .";
//         break;
//     default:
//         update.innerHTML = "It's pretty normal outside today. Take a jacket, just in case.";
// }




// // SWITCH(TRUE) CONSTRUCTOR
// switch(true){
//     case weather == "raining" || weather == "Raining":
//         update.innerHTML = "It's raining. Best not put out any washing.";
//         break;
//     case weather == "snowing" || weather == "Snowing":
//         update.innerHTML = "It's snowing! Washing won't dry outside today.";
//         break;
//     case wind > 30:
//         update.innerHTML = "It's very windy! Your washing might blow away.";
//         break;
//     case weather == "sunny" && wind >= 10:
//         update.innerHTML = "Sun and a breeze! Perfect day for drying washing.";
//         break;
//     default:
//         update.innerHTML = "It's dry outside! Time to put out the washing.";
// }
