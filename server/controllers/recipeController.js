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

// Read All Recipe to show 
const getRecipes = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
}

// Single Product to show by Id
const getRecipeById = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
}

// Update Recipe by Id
const updateRecipe = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
}

// Delete Recipe by Id
const deleteRecipe = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
}

module.exports = { createRecipe , getRecipes , getRecipeById , updateRecipe, deleteRecipe};