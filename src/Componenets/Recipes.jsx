import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Recipes = ({addRecipeToQueue}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('./recipes.json')
        .then(res =>res.json())
        .then(data=>setRecipes(data))
    },[])
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                recipes.map(recipe=>
                    <div key={recipe.recipe_id} className="card bg-base-100  border-2">
                    <figure className="px-5 pt-5">
                      <img 
                        src={recipe.image_url}
                        alt="recipe image"
                        className="rounded-xl w-full h-52 object-cover" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-lg font-medium text-gray-800">{recipe.recipe_name}</h2>
                      <p className="text-gray-600 text-base">{recipe.short_description}</p>
                      <h3 className="font-medium text-lg text-gray-800">Ingredients: {recipe.ingredients.length}</h3>
                      <ul className="ml-8">
                        {
                            recipe.ingredients.map((item, idx) =><li key={idx} className="list-disc text-gray-600">{item}</li>)
                        }
                      </ul>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2 font-semibold">
                            <i className="fa-regular fa-clock"></i>
                            <p>{recipe.preparing_time} minute</p>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                        <i className="fa-solid fa-fire-flame-curved"></i>
                            <p>{recipe.calories} calories</p>
                        </div>
                      </div>
                      <div className="card-actions">
                        <button onClick={()=>addRecipeToQueue(recipe)} className="btn bg-[#0BE58A] rounded-full font-medium text-xl">Want to Cook</button>
                      </div>
                    </div>
                  </div>)
            }
            </div>
        </div>
    );
};


Recipes.propTypes = {
    addRecipeToQueue: PropTypes.func
  };

export default Recipes;