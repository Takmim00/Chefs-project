import { useState } from "react";
import Header from "./Componenets/Header";
import OurRecipes from "./Componenets/OurRecipes";
import Recipes from "./Componenets/Recipes";
import Sidebar from "./Componenets/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipes already exists in the queue.");
    }
  };
  const handleRemove = id =>{
    //find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe=> recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }
  const calculateTimeAndCalories =(time, calories)=>{
    setTotalTime(totalTime+time)
    setTotalCalories(totalCalories + calories)
  }
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <OurRecipes></OurRecipes>
      <section className="flex flex-col md:flex-row gap-6">
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        <Sidebar handleRemove={handleRemove} recipeQueue={recipeQueue} preparedRecipe={preparedRecipe} calculateTimeAndCalories={calculateTimeAndCalories} totalTime={totalTime} totalCalories={totalCalories}></Sidebar>
      </section>
    </div>
  );
}

export default App;
