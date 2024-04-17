export function isValidSudoku(grid) {
  if (grid.length !== 81) {
    return false; // Invalid grid size
  }

  // Check rows
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    for (let j = 0; j < 9; j++) {
      const value = grid[i * 9 + j];
      if (value !== null && rowSet.has(value)) {
        return false; // Duplicate value in row
      }
      rowSet.add(value);
    }
  }

  // Check columns
  for (let i = 0; i < 9; i++) {
    const colSet = new Set();
    for (let j = 0; j < 9; j++) {
      const value = grid[j * 9 + i];
      if (value !== null && colSet.has(value)) {
        return false; // Duplicate value in column
      }
      colSet.add(value);
    }
  }

  // Check subgrids (all 9 subgrids)
  for (let i = 0; i < 7; i += 3) {
    for (let j = 0; j < 7; j += 3) {
      const subgridSet = new Set();
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          const value = grid[k * 9 + l];
          if (value !== null && subgridSet.has(value)) {
            return false; // Duplicate value in subgrid
          }
          subgridSet.add(value);
        }
      }
    }
  }

  return true; // All checks passed, Sudoku is valid
}