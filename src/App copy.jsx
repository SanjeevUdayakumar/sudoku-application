import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import RenderCell from './components/RenderCell';

const App = () => {
    const sudokuSolution = [
    [5, null, 4, 6, null, 8, 9, null, 2],
    [6, 7, null, 1, 9, 5, null, null, 8],
    [1, 9, null, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, null, 6, 1, null, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, null, 9, 2, null, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, null],
    [2, 8, 7, 4, null, 9, null, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];
  const [grid, setGrid] = useState(sudokuSolution);

  // // Optional: Pre-populate the grid with a solved Sudoku (replace with your logic)
  // useEffect(() => {
  //   const solvedGrid = [
  //     // ... your solved Sudoku data here
  //   ];
  //   setGrid(solvedGrid);
  // }, []);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleChange = (row, col, value) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[row][col] = value;
      return newGrid;
    });
  };

  const onSubmit = (data) => {
    console.log(data); // Access form data (grid values) for validation or processing
    // Add your Sudoku validation logic here
  };

 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-9 gap-2">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className=" grid grid-cols-3 gap-1">
            {row.map((cell, colIndex) => <RenderCell grid={grid} register={register} key={colIndex} row={rowIndex} col={colIndex} errors={errors} handleChange={handleChange}/>)}
          </div>
        ))}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default App;


//   const sudokuSolution = [
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
//   ];
