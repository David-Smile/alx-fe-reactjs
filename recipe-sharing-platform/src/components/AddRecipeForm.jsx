import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // renamed from instructions
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("⚠️ Please fill in all fields before submitting.");
      return;
    }

    const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientsList.length < 2) {
      setError("⚠️ Please enter at least 2 ingredients.");
      return;
    }

    // Create new recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      description: steps.substring(0, 60) + "...",
      image: "https://source.unsplash.com/400x300/?food",
      ingredients: ingredientsList,
      steps: steps.split("\n").filter((step) => step.trim() !== ""), // now stored as steps
    };

    console.log("✅ New Recipe Added:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
    alert("🎉 Recipe submitted successfully!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          ➕ Add a New Recipe
        </h1>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter recipe title"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Ingredients (one per line)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="e.g.\n2 cups flour\n1 tsp salt\n1 tbsp sugar"
            ></textarea>
          </div>

          {/* Steps */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Preparation Steps (one per line)
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="6"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="e.g.\nMix ingredients\nBake at 180°C for 20 minutes"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
