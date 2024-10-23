import PropTypes from "prop-types";

const Sidebar = ({recipeQueue}) => {
    return (
        <div className="w-1/3">
            Want to cook : {recipeQueue.length}
        </div>
    );
};

Sidebar.propType={
    recipeQueue : PropTypes.number
}

export default Sidebar;