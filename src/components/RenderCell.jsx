const RenderCell = ({
  row,
  grid,
  col,
  name,
  handleChange
}) => {
  const value = grid[row][col];
  return (
    <>
      <input
        key={`${row}-${col}`}
        name={name}
        type="number"
        min="1"
        max="9"
        value={value}
        onChange={(e) => handleChange(row, col, e.target.value)}
        className={`${
          value ? "bg-blue-500" : "bg-white"
        } rounded-sm border-[3px] font-medium border-gray-300 ps-3 w-[40px] h-[40px] outline-none focus:ring-2 ${
          value >= 1 && value <= 9 ? "" : "border-red-500 bg-white text-red-500"
        }`}
        onPaste={(e)=>{
          e.preventDefault()
          return false;
        }} onCopy={(e)=>{
          e.preventDefault()
          return false;
        }}
      />
    </>
  );
};

export default RenderCell;
