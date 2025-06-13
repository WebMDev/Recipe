const route = require('express').Router();

const { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const auth = require('../middleware/Auth');
const { upload, uploadToCloudinary } = require('../middleware/upload');

// Create Recipe 
route.post('/', auth, upload.single("image"), uploadToCloudinary, createRecipe);

// Read All Recipe to show & Single Product to show by Id
route.get('/', getRecipes);
route.get('/:id', getRecipeById);

// Update Recipe by Id
route.put('/:id', auth, upload.single("image"), uploadToCloudinary, updateRecipe);

// Delete Recipe by Id
route.delete('/:id', deleteRecipe);

module.exports = route;