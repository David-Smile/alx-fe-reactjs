import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // <-- contains "steps"
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("⚠️ Please fill in all fields before submitting.");
      return;
    }

    const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientsList.length < 2) {
      setError("⚠️ Please enter at least 2 ingredients.");
      return;
    }

    // recipe object includes "steps"
    const newRecipe = {
      id: Date.now(),
      title,
      description: steps.substring(0, 60) + "...",
      image: "https://source.unsplash.com/400x300/?food",
      ingredients: ingredientsList,
      steps: steps.split("\n").filter((step) => step.trim() !== ""), // <-- contains "steps"
    };

    console.log("✅ New Recipe Added:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps(""); // <-- reset steps
    setError("");
    alert("🎉 Recipe submitted successfully!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center
