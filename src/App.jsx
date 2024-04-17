import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import RenderCell from "./components/RenderCell";
import { isValidSudoku } from "./logic";

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

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (row, col, value) => {
    console.log(row, col, value);
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[row][col] = value;
      return newGrid;
    });
  };

  const onSubmit = (data) => {
    console.log(data.grid.flat(2)); // Access form data (grid values) for validation or processing
    // Sudoku validation logic
    const isValid = isValidSudoku(data.grid.flat(2))
    console.log(isValid);
  };

  return (
    <>
      <h1 className="text-center text-2xl font-semibold p-5 text-white">Suduko app</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto mt-16"
      >
        <div className="grid grid-cols-3 gap-2">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-3 gap-1">
              {row.map((cell, colIndex) => (
                <RenderCell
                  grid={grid}
                  register={register(`grid[${rowIndex}][${colIndex}]`)}
                  name={`${rowIndex}-${colIndex}`}
                  key={colIndex}
                  row={rowIndex}
                  col={colIndex}
                  errors={errors}
                  handleChange={handleChange}
                />
              ))}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-700"
        >
          Validate
        </button>
      </form>
    </>
  );
};

export default App;
