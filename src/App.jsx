import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import RenderCell from './components/RenderCell';

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
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];
  const [grid, setGrid] = useState(sudokuSolution);

  // // Pre-populate the grid with a solved Sudoku (replace with your logic)
  // useEffect(() => {
  //   const solvedGrid = [
  //   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
  //   ];
  //   setGrid(solvedGrid);
  // }, []);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleChange = (row, col, value) => {
    console.log(row,col,value);
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

  const renderCell = (row, col) => {
    const value = grid[row][col];
    const isPrepopulated = value !== undefined; // Differentiate pre-populated cells

    return (
      <>
        {/* {console.log(isPrepopulated)} */}
      <input
        key={`${row}-${col}`}
        type="number"
        min="1"
        max="9"
        value={value}
        // onChange={(e)=>{e.preventDefault();console.log('welcome')}}
        onChange={(e) => handleChange(row, col, e.target.value)}
        disabled={isPrepopulated} // Disable pre-populated cells for editing
        {...register(`grid[${row}][${col}]`, {
          validate: (value) => (value === '' || (Number(value) >= 1 && Number(value) <= 9)) || 'Invalid input (1-9)',
        })}
        className={` rounded-sm border border-gray-300 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[`grid[${row}][${col}]`] ? 'border-red-500' : ''}`}
        />
        </>
    );
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-4xl mx-auto mt-20'>
      <div className="grid grid-cols-3 gap-2">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-3 gap-1">
            {row.map((cell, colIndex) => <RenderCell grid={grid} register={register(`grid[${rowIndex}][${colIndex}]`)} name={`${rowIndex}-${colIndex}`} key={colIndex} row={rowIndex} col={colIndex} errors={errors} handleChange={handleChange}/>)}
          </div>
        ))}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-700">
        Validate
      </button>
    </form>
  );
};

export default App;
