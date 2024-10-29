let latestRecipes = ["Triple Chocolate Cookies", "Classic Crepes", "Mushroom Stroganoff", "Maple & Pecan Roulade", "Tiramisu", 
    "Perfect Roast Potatoes", "Butter Chicken", "Apple & Blackberry Crumble"];



// global variable initialization
let i = 0
let h2 = document.getElementById("Art"+ i);
let recipeTitle = "Null";



/* The recipeCarousel function takes each item in the array 
(after filtering) and replaces the <h2> titles of each article 
with the name property of recipe objects in our array.
*/

const recipeCarousel = function()
{
    //for loop iterating through every object still in the array
    for (const recipe of latestRecipes){
        i = latestRecipes.indexOf(recipe)+1;
        h2 = document.getElementById("Art"+ i);
        h2.innerHTML = latestRecipes[i];
        recipeTitle = h2.innerHTML;
        if (i >=8){
            break;
        };
    };

};

/*The cleanup function checks to see whether each article 
box is using one of our recipe names - if it isn't, it 
removes that article box from the webpage.
*/
const cleanup = function(){
    for (let artNo = 1; artNo <=8; artNo++){
        let article = document.getElementById("Art"+ artNo);
        console.log(article.innerHTML);
        if (article.innerHTML != "undefined"){

        }
        else{
            article.parentElement.remove();
        };
    };
};

// /* Filter Array Method is able to filter out recipes based 
// on the value of certain properties */
// latestRecipes = latestRecipes.filter(function(recipe)
//     {
//         // Adjust the condition below to filter recipes based on one of the 3 boolean properties we gave them
//         if (recipe.vegetarian) {
//             return recipe;
//         }
//         else {

//         };
//     }
// );


//function filterBy allows us to use the buttons on our webpage to change how we filter our recipes

// Invoking our two functions we created:
recipeCarousel();
cleanup();
