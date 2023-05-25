        // Array to store recipes
        var recipes = [];
        
        // Function to add an ingredient
        function addIngredient() {
            var ingredientInput = document.getElementById('ingredient-input');
            var ingredient = ingredientInput.value;
            
            if (ingredient) {
                var ingredientList = document.getElementById('ingredient-list');
                var listItem = document.createElement('li');
                listItem.textContent = ingredient;
                ingredientList.appendChild(listItem);
                
                ingredientInput.value = '';
            }
        }
        
        // Function to add an instruction
        function addInstruction() {
            var instructionInput = document.getElementById('instruction-input');
            var instruction = instructionInput.value;
            
            if (instruction) {
                var instructionList = document.getElementById('instruction-list');
                var listItem = document.createElement('li');
                listItem.textContent = instruction;
                instructionList.appendChild(listItem);
                
                instructionInput.value = '';
            }
        }
        
        // Function to save the recipe
        function saveRecipe() {
            var recipeTitleInput = document.getElementById('recipe-title');
            var recipeTitle = recipeTitleInput.value;
            var ingredientList = document.getElementById('ingredient-list');
            var instructionList = document.getElementById('instruction-list');
            
            if (recipeTitle && ingredientList.children.length > 0 && instructionList.children.length > 0) {
                var recipe = {
                    title: recipeTitle,
                    ingredients: [],
                    instructions: []
                };
                
                for (var i = 0; i < ingredientList.children.length; i++) {
                    recipe.ingredients.push(ingredientList.children[i].textContent);
                }
                
                for (var j = 0; j < instructionList.children.length; j++) {
                    recipe.instructions.push(instructionList.children[j].textContent);
                }
                
                recipes.push(recipe);
                displayRecipes();
                
                // Clear input fields
                recipeTitleInput.value = '';
                ingredientList.innerHTML = '';
                instructionList.innerHTML = '';
            }
        }
        
        // Function to display recipes
        function displayRecipes() {
            var recipeList = document.getElementById('recipe-list');
            recipeList.innerHTML = '';
            
            for (var i = 0; i < recipes.length; i++) {
                var recipe = recipes[i];
                
                // Create recipe container
                var recipeContainer = document.createElement('div');
                recipeContainer.className = 'recipe-container';
                recipeContainer.setAttribute('onclick', 'displayRecipeDetails(' + i + ')');
                
                // Create recipe title
                var recipeTitle = document.createElement('h3');
                recipeTitle.textContent = recipe.title;
                recipeContainer.appendChild(recipeTitle);
                
                // Append recipe container to recipe list
                recipeList.appendChild(recipeContainer);
                
                // Create recipe details container
                var recipeDetailsContainer = document.createElement('div');
                recipeDetailsContainer.className = 'recipe-details';
                
                // Create ingredients list
                var ingredientsList = document.createElement('ul');
                for (var j = 0; j < recipe.ingredients.length; j++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = recipe.ingredients[j];
                    ingredientsList.appendChild(listItem);
                }
                recipeDetailsContainer.appendChild(ingredientsList);
                
                // Create instructions list
                var instructionsList = document.createElement('ol');
                for (var k = 0; k < recipe.instructions.length; k++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = recipe.instructions[k];
                    instructionsList.appendChild(listItem);
                }
                recipeDetailsContainer.appendChild(instructionsList);
                
                // Append recipe details container to recipe list
                recipeContainer.appendChild(recipeDetailsContainer);
            }
        }
        
        // Function to display recipe details
function displayRecipeDetails(index) {
    var recipeContainers = document.getElementsByClassName('recipe-container');
    var recipeContainer = recipeContainers[index];
    var recipeDetails = recipeContainer.getElementsByClassName('recipe-details')[0];

    // Toggle visibility of recipe details
    if (recipeDetails.style.display === 'none') {
        recipeDetails.style.display = 'block';
    } else {
        recipeDetails.style.display = 'none';
    }
}

// Function to display recipes
function displayRecipes() {
    var recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    for (var i = 0; i < recipes.length; i++) {
        var recipe = recipes[i];

        // Create recipe container
        var recipeContainer = document.createElement('div');
        recipeContainer.className = 'recipe-container';
        recipeContainer.setAttribute('onclick', 'displayRecipeDetails(' + i + ')');

        // Create recipe title
        var recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.title;
        recipeContainer.appendChild(recipeTitle);

        // Create recipe details container
        var recipeDetailsContainer = document.createElement('div');
        recipeDetailsContainer.className = 'recipe-details';
        recipeDetailsContainer.style.display = 'none';

        // Create ingredients title
        var ingredientsTitle = document.createElement('h4');
        ingredientsTitle.textContent = 'Ingredients:';
        recipeDetailsContainer.appendChild(ingredientsTitle);

        // Create ingredients list
        var ingredientsList = document.createElement('ul');
        for (var j = 0; j < recipe.ingredients.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = recipe.ingredients[j];
            ingredientsList.appendChild(listItem);
        }
        recipeDetailsContainer.appendChild(ingredientsList);

        // Create instructions title
        var instructionsTitle = document.createElement('h4');
        instructionsTitle.textContent = 'Instructions:';
        recipeDetailsContainer.appendChild(instructionsTitle);

        // Create instructions list
        var instructionsList = document.createElement('ol');
        for (var k = 0; k < recipe.instructions.length; k++) {
            var listItem = document.createElement('li');
            listItem.textContent = recipe.instructions[k];
            instructionsList.appendChild(listItem);
        }
        recipeDetailsContainer.appendChild(instructionsList);

        // Append recipe details container to recipe container
        recipeContainer.appendChild(recipeDetailsContainer);

        // Append recipe container to recipe list
        recipeList.appendChild(recipeContainer);
    }
}

   