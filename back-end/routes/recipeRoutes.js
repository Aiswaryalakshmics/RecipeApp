const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();
const recipeController = require('../controllers/recipeController')

// Route to get all recipes
router.get('/',recipeController.getRecipes);

// Add a new recipe
router.post('/add',async (req,res)=>{
try{
    const { title,imageUrl,ratings }= req.body;

// Create a new Recipe instance
    const newRecipe = new Recipe({
        title,
        // description,
        // ingredients,
        //steps,
        imageUrl,
        //cookTime,
        //createdBy,
        ratings
   });
  
// Save the recipe to the database
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
    } catch (error) {
      console.error('Error adding recipe :',error);
      res.status(400).json({ error: 'Failed to add recipe' });
    }
});

module.exports= router;