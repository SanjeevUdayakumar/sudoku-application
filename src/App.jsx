import React, { useState, useEffect } from "react";
import RenderCell from "./components/RenderCell";
import { isValidSudoku } from "./logic";
import { isValidMove } from "./validMove";

const App = () => {
  const sudokuSolution = [
    [5, undefined, 4, 6, undefined, 8, 9, undefined, 2],
    [6, 7, undefined, 1, 9, 5, undefined, undefined, 8],
    [1, 9, undefined, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, undefined, 6, 1, undefined, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, undefined, 9, 2, undefined, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, undefined],
    [2, 8, 7, 4, undefined, 9, undefined, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];
  const [grid, setGrid] = useState(sudokuSolution);
  const [isValid, setValid] = useState(true);
  const [isValidInput,setValidInput] = useState(false)

  const handleChange = (row, col, value) => {
    setValid(isValidMove(grid,row,col,value,setValidInput))
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[row][col] = value;
      return newGrid;
    });
  };

  return (
    <>
      <h1 className="text-center text-2xl font-semibold p-5 text-white">
        Suduko app
      </h1>
      {isValidSudoku(grid.flat(2)) ? <h1 className="valid">Valid  Sudoko Board</h1> : <h1 className="invalid">Invalid Sudoko Board</h1> }
        {isValid ? <h1 className="valid">Valid Move</h1> : <h1 className="invalid">Invalid Move</h1> }
      <div
        className="max-w-fit mx-auto mt-4 relative"
      >
        <div className="grid grid-cols-3 gap-2">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-3 gap-1">
              {row.map((cell, colIndex) => (
                <RenderCell
                  grid={grid}
                  name={`${rowIndex}-${colIndex}`}
                  key={colIndex}
                  row={rowIndex}
                  col={colIndex}
                  handleChange={handleChange}
                />
              ))}
            </div>
          ))}
        </div>
        {isValidInput && <div className="absolute text-center top-1 left-16 bg-white p-5 rounded-xl font-medium border-2 border-red-700">
          <h4 className="px-20 text-xl pb-2 text-center text-red-500 font-semibold">Invalid Input</h4>
          <p className="text-gray-500 text-sm"> Enter Input 1 - 9</p>
          <button onClick={()=>setValidInput(false)} className="px-2 ms-auto text-lg bg-red-400 hover:bg-red-500 rounded-md text-white block mx-auto mt-5 cursor-pointer">Ok</button>
        </div>}

      </div>
      <div className="mt-5 bg-white p-5 max-w-fit mx-auto flex items-center">
        <div className="w-10 h-10 border-4 border-red-600"></div>
        <div className="h-1 w-4 bg-black mx-5"></div>
        <div className="text-lg font-medium">InValid input and enter value 1 - 9</div>
      </div>
    </>
  );
};

export default App;
