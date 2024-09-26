let latestRecipes = ["Triple Chocolate Cookies", "Classic Crepes", "Mushroom Stroganoff", "Maple & Pecan Roulade", "Tiramisu", 
    "Perfect Roast Potatoes", "Butter Chicken", "Apple & Blackberry Crumble"
];

let i = 0;
let h2 = document.getElementById("Art"+ i);

const recipeCarousel = function()
{
    for (const recipe of latestRecipes){
    console.log(recipe);
    i = latestRecipes.indexOf(recipe)+1;
    console.log(i);
    h2 = document.getElementById("Art"+i);
    console.log(h2);
    h2.innerHTML = recipe.toString();
    if (i >=8){
        break;
    }
}
};


// latestRecipes = latestRecipes.filter(function(recipe){
//     return !recipe.toString().includes("Chicken");
// });

recipeCarousel();