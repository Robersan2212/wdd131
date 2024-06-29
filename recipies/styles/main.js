// Step 1: Import Recipes
import { recipes } from './recipies.mjs';

// Step 2: Random Number Function
function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// Step 3: Random Recipe Function
function getRandomRecipe() {
    return recipes[getRandomNumber(recipes.length)];
}

// Step 4: Recipe Template Function
function recipeTemplate(recipe) {
    return `
        <div class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
            ${tagsTemplate(recipe.tags)}
            ${ratingTemplate(recipe.rating)}
        </div>
    `;
}

// Step 5: Tags Template Function
function tagsTemplate(tags) {
    return `<ul class="tags">${tags.map(tag => `<li>${tag}</li>`).join('')}</ul>`;
}

// Step 6: Rating Template Function
function ratingTemplate(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<span class="icon-star">⭐</span>' : '<span class="icon-star-empty">☆</span>';
    }
    return `<div class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">${stars}</div>`;
}

// Step 7: Init Function
function init() {
    const recipe = getRandomRecipe();
    document.getElementById('recipe').innerHTML = recipeTemplate(recipe);
}

// Ensure this script is deferred or placed at the bottom of the body,
// then call init to render a recipe on page load.
document.addEventListener('DOMContentLoaded', init);

// Step 8: Testing is done by loading the page and verifying the output.