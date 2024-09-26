//defining the original array
const compArtsNames = ["Will","Hannah-Louise","Hannah", "Linards", "Tanje", "Tracey", "Michael"];
console.log(compArtsNames);

//using the default parameters of the .toSorted method to sort the names from a-z
let sortedCompArtsNames = compArtsNames.toSorted();
console.log(sortedCompArtsNames);

//adding an arrow function as a parameter in the .toSorted method to reverse the sort from z-a
let reverseCompArtsNames = compArtsNames.toSorted((a,b) => b.localeCompare(a));
console.log(reverseCompArtsNames);

///////////////////////////////////////////////////////////////////////////////////////////

const daysOfYear = function(standard = 365) {
    console.log(`There are ${standard.toString()} days in this year`);
}

daysOfYear("366");
daysOfYear();
