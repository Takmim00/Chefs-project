// import PropTypes from "prop-types";

const Sidebar = ({ recipeQueue ,handleRemove, preparedRecipe}) => {
  return (
    <div className="w-1/3 border-2 rounded-2xl p-2 text-gray-600 bg-base-100">
      {/* Want to cook table */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-bold text-gray-800 text-center py-4 text-2xl">Want to cook : {recipeQueue.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                recipeQueue.map((recipe,idx)=>
                <tr className="hover" key={idx}>
                    <th>{idx + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time}</td>
                    <td>{recipe.calories}</td>  
                    <td><button onClick={()=>handleRemove(recipe.recipe_id)} className="btn bg-[#0BE58A] rounded-full font-bold">Preparing</button></td>                 
                </tr>)
            }
          </tbody>
        </table>
      </div>
      {/* Currently cook table */}
      <div className="overflow-x-auto mt-8">
        <h2 className="border-b-2 mx-auto font-bold text-gray-800 text-center py-4 text-2xl">Currently cooking : {preparedRecipe.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {
                preparedRecipe.map((recipe,idx)=>
                <tr className="hover" key={idx}>
                    <th>{idx + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time}</td>
                    <td>{recipe.calories}</td>                  
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Sidebar.propType = {
//   recipeQueue: PropTypes.array.isRequired,
//   handleRemove: PropTypes.func.isRequired,
//   preparedRecipe: PropTypes.func.isRequired,
// };

export default Sidebar;
