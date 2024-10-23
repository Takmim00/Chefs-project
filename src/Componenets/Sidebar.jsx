import PropTypes from "prop-types";

const Sidebar = ({ recipeQueue }) => {
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
                    <td><button onClick={()=>console.log('Preparing')} className="btn bg-[#0BE58A] rounded-full font-bold">Preparing</button></td>                 
                </tr>)
            }
          </tbody>
        </table>
      </div>
      {/* Currently cook table */}
    </div>
  );
};

Sidebar.propType = {
  recipeQueue: PropTypes.number,
};

export default Sidebar;
