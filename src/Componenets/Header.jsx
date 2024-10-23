import img1 from "./img/Vector.png";

const Header = () => {
  return (
    <div className=" text-center bg-cover bg-center h-64">
      {/* nav section.... */}
      <div className="m-10 flex items-center justify-around ">
        <h1 className="text-3xl">Recipe Calories</h1>
        <div>
          <a href="Home" className="px-5">
            Home
          </a>
          <a href="Recipes" className="px-5">
            Recipes
          </a>
          <a href="About" className="px-5">
            About
          </a>
          <a href="Search" className="px-5">
            Search
          </a>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search......"
            className="px-7 py-3 rounded-3xl bg-slate-200"
          />
          <img
            className="ml-3 rounded-3xl p-3 bg-green-600"
            src={img1}
            alt=""
          />
        </div>
      </div>
      {/* header section */}
      <div className=" max-h-80">
        <div
          className="bg-no-repeat  bg-center max-h-full  rounded-3xl "
          style={{
            backgroundImage: `url("https://i.ibb.co/Sxk1Pyp/Rectangle-1.png")`,
          }}
        >
          <h1 className="text-5xl py-2 pt-36 text-white">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p className="py-2 text-white">
            Here are several different ways to cook food. Boiling cooks food in
            hot water. Frying (deep or shallow) cooks food <br /> in hot butter,
            fat or oil. Baking and roasting cook food by surrounding it with hot
            air.
            <br /> Grilling means cooking food on a metal grill that has heat
            under it.
          </p>
          <div className="py-2 pb-40">
            <button className="p-3  btn btn-success  text-lg">
              Explore Now
            </button>
            <button className="p-3 ml-3 text-white btn glass text-lg">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
