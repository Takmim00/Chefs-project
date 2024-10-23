import { useState } from "react";
import Header from "./Componenets/Header";
import OurRecipes from "./Componenets/OurRecipes";
import Recipes from "./Componenets/Recipes";
import Sidebar from "./Componenets/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([])

  const addRecipeToQueue = recipe =>{
    setRecipeQueue ([...recipeQueue,recipe])
  }
  console.log(recipeQueue);
  return (
    <div className="w-11/12 mx-auto">
    <Header></Header>
    <OurRecipes></OurRecipes>
      <section className="flex flex-col md:flex-row gap-6">
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        <Sidebar></Sidebar>
      </section>
    </div>
  );
}

export default App;
