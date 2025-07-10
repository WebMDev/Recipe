const Recipe = require('../models/recipes');

// Create Recipe
const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, steps, tags, author } = req.body;
    // console.log(req.body);
    
    if(!title || !description || !ingredients || !steps ) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }
    const newRecipe = new Recipe({
      title,
      description,
      image : req.file.cloudinaryUrl,
      ingredients,
      steps,
      tags,
      author: req.user.id
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });    
  }
}

// Get All Recipe to show 
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('author', 'username email');
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
}

// Single Product to show by Id
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('author', 'username email');
    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
}

// Update Recipe by Id
const updateRecipe = async (req, res) => {
  // try {
  //   const { title, description, ingredients, steps, tags } = req.body;
  //   const recipe = await Recipe.findById(req.params.id);

  //   if (!recipe) {
  //     return res.status(404).json({ msg: "Recipe not found" });
  //   }

  //   if (recipe.author.toString() !== req.user.id) {
  //     return res.status(401).json({ msg: "Unauthorized" });
  //   }

  //   recipe.title = title || recipe.title;
  //   recipe.description = description || recipe.description;
  //   recipe.ingredients = ingredients || recipe.ingredients;
  //   recipe.steps = steps || recipe.steps;
  //   recipe.tags = tags || recipe.tags;
  //   if (req.file?.cloudinaryUrl) {
  //     recipe.image = req.file.cloudinaryUrl;
  //   }

  //   const updated = await recipe.save();
  //   res.status(200).json(updated);
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ msg: 'Server error' });
  // }
}

// Delete Recipe by Id
const deleteRecipe = async (req, res) => {
  // try {
  //   const recipe = await Recipe.findById(req.params.id);

  //   if (!recipe) {
  //     return res.status(404).json({ msg: "Recipe not found" });
  //   }

  //   if (recipe.author.toString() !== req.user.id) {
  //     return res.status(401).json({ msg: "Unauthorized" });
  //   }

  //   await recipe.remove();
  //   res.status(200).json({ msg: "Recipe deleted successfully" });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ msg: 'Server error' });
  // }
}

module.exports = { createRecipe , getRecipes , getRecipeById , updateRecipe, deleteRecipe};