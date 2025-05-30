import React from "react";

const PlayGameNavbar = ({ score, pickedNum, setPickedNum, isNumPicked }) => {
  return (
    <div>
      <nav className="flex justify-between h-40 mt-10">
        <div className="flex flex-col items-center  px-10">
          <span className="score font-semibold text-8xl">{score}</span>
          <span className="font-semibold text-4xl">Total Score</span>
        </div>
        <div className=" flex flex-col pt-3">
          {!isNumPicked  && <span className="absolute top-0 text-red-800 text-lg">Please select the number </span>}
          <div className=" flex gap-6 px-10">
            {[1, 2, 3, 4, 5, 6].map((num) => {
              return (
                <button
                  className={`font-bold text-3xl border-2 border-black h-[70px] w-[70px] flex items-center justify-center | transition-colors duration-200 rounded-lg ${pickedNum === num ? "bg-black text-white":"" }`}
                  key={num}
                  onClick={() => {
                    setPickedNum(num)
                  }}
                >
                  {num}
                </button>
              );
            })}

          </div>
          <div className="ml-auto text-3xl font-bold m-10 mt-5">Select Number</div>
        </div>
      </nav>
    </div>
  );
};

export default PlayGameNavbar;
