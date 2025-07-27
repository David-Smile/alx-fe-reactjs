import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail'; // we'll create this

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
};

export default App;
