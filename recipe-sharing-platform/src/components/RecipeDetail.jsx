import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe details:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">
            {recipe.title}
          </h1>
          <p className="text-gray-700 mb-4">{recipe.description}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <Link
            to="/"
            className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
