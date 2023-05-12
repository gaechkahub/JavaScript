/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *   
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *   
 * Expected result:
 *   
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

const mealRecipe = {
  title: "Omelette",
  servings: 2,
  ingridients: ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"]
};
for (let property in mealRecipe) {
   if (property == 'title') {
        console.log(`Meal name: ${mealRecipe[property]}`);
    } else if (property == 'servings') {
        console.log(`Serves: ${mealRecipe[property]}`);
    } else {
        const ingredientList = mealRecipe[property];

        console.log(`Ingedients: ${ingredientList.join(', ')}`);
    }
} 
