"use strict";
// We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)
const chooseRecipe = (bakeryA, bakeryB, recipes) => {
    const availableRecipe = recipes.find((recipe) => {
        const availableAtBakeryA = recipe.ingredients.some((ingredient) => bakeryA.includes(ingredient));
        const availableAtBakeryB = recipe.ingredients.some((ingredient) => bakeryB.includes(ingredient));
        if (availableAtBakeryA && availableAtBakeryB)
            return true;
    });
    return availableRecipe ? availableRecipe.name : 'No Recipe found';
};
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base'],
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese'],
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef'],
    },
];
console.log(chooseRecipe(bakeryA, bakeryB, recipes), '=== Persian Cheesecake');
bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate'],
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey'],
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins'],
    },
];
console.log(chooseRecipe(bakeryA, bakeryB, recipes), "=== Nima's Famous Dijon Raisins");
