// seed.js
const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Adjust the path based on your project structure
const User = require('./models/user.model');
const URL = "mongodb+srv://john_44:john44@cluster0.6jube.mongodb.net/myAppDatabase?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

async function seedDatabase() {
    try {
      // Find or create the user for `createdBy` reference
      let user = await User.findOne({ name: "John Albert" });
  
      if (!user) {
        user = new User({ name: "John Albert", email: "john@gmail.com", password: "john123" });
        await user.save();
      }
    
const recipes = [
  {
    title: 'Spaghetti Carbonara',
    // description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
     imageUrl: 'https://rupal-bhatikar.com/wp-content/uploads/2020/07/DSC03664-1.jpg',
    // ingredients: ['spaghetti', 'eggs', 'cheese', 'pancetta', 'pepper'],
    // steps: 'Boil pasta, cook pancetta, mix with eggs and cheese, combine.',
    //cookTime:'40 minutes',
    //createdBy: new mongoose.Types.ObjectId(user._id),
    rating:'4.5'
  },
  {
    title: 'Chicken Curry',
    // ingredients: ['spaghetti', 'eggs', 'cheese', 'pancetta', 'pepper'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpY6Vjt8xmksn3J9yADjrkTQNnoSN41YBOQQ&s',
    // ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic'],
    // steps: 'Cook chicken, add spices and coconut milk, simmer until done.',
    //cookTime:'50 minutes', 
    //createdBy:new mongoose.Types.ObjectId(user._id), 
    rating: '4.7'
  },
  {
    title : "Paneer",
    // description : "The dish is a vegetarian take on Butter Chicken but fairly easy to make than butter chicken",
    imageUrl : "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x500.jpg",
    // ingredients: "cashew,tomato,ginger-garlic,Butter",
    // steps: "soaking cashews, peeled and roughly chopped, add water,combine.",
    // cookTime:"45 minutes",
    // createdBy:new mongoose.Types.ObjectId(user._id),
    rating: "4"
  }  
];


// Insert recipes into the database
  await Recipe.insertMany(recipes);
  console.log("Recipes added successfully!");

} catch (error) {
  console.error("Error seeding the database:", error.message);
} finally {
  mongoose.connection.close(); // Close connection after seeding
}
}

seedDatabase();