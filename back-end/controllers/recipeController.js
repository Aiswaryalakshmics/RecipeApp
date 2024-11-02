const Recipe = require('../models/Recipe'); // Adjust path as needed

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch from service
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve recipes" });
  }
};

// Example function to add a recipe
exports.addRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Error adding recipe' });
  }
};