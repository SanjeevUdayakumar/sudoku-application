const RenderCell = ({row,grid,col,name,handleChange,errors,register}) => {
  const value = grid[row][col];
  const isPrepopulated = value !== undefined; // Differentiate pre-populated cells
  return (
    <input
      key={`${row}-${col}`}
      name={name}
      type="number"
      min="1"
      max="9"
      value={value}
      onChange={(e) => handleChange(row, col, e.target.value)}
      // disabled={isPrepopulated} // Disable pre-populated cells for editing
      {...register}
      className={`${value ? 'bg-blue-500' : 'bg-white' } rounded-sm border border-gray-300 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[`grid[${row}][${col}]`] ? 'border-red-500' : ''}`}
    />
  );
};

export default RenderCell