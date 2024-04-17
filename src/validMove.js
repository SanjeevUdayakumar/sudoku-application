export function isValidMove(grid, row, col, num, setValidInput) {
    const gridLength = 9; 
    num>=1 && num<=9 || num == '' ? setValidInput(false) : setValidInput(true)
    if(num<1 || num>9){
      return false
    }
    // Check if number is already in row
    let rowString = "";
    for (let j = 1; j <= gridLength; j++) {
      rowString += grid[row][j - 1]; // Access grid using row and column indices (0-based)
    }
    if (rowString.includes(num)) {
      return false;
    }
  
    // Check if number is already in column
    let colString = "";
    for (let i = 1; i <= gridLength; i++) {
      colString += grid[i - 1][col]; // Access grid using row and column indices
    }
    if (colString.includes(num)) {
      return false;
    }
  
    // Check if number is already in subgrid 
    const subgridRowStart = Math.floor(row / 3) * 3;
    const subgridColStart = Math.floor(col / 3) * 3;
    let subgridString = "";
    for (let i = subgridRowStart; i < subgridRowStart + 3; i++) {
      for (let j = subgridColStart; j < subgridColStart + 3; j++) {
        subgridString += grid[i][j];
      }
    }
    if (subgridString.includes(num)) {
      return false;
    }
  
    return true; // valid move
  }
  