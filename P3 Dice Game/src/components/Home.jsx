import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="HomePageImage flex m-32">
      <div className="w-[48vw] ">
        <img className="w-full" src="/images/dices.png" alt="Dices" />
      </div>
      <div className="w-[52vw] flex flex-col justify-center items-center m-auto">
        <span className="text-9xl font-bold">Dice Game</span>
        <Link to="/playgame" className="ml-auto mr-3 mt-10">
          <button className="bg-black rounded-md text-white font-semibold text-lg w-56 h-11 border-2 border-black active:bg-white active:text-black  ">
            Play Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
