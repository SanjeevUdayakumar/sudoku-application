function isSubgridValid(grid, startRow, startCol) {
    const numSet = new Set();
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        const num = grid[i][j];
        if (num !== 0 && numSet.has(num)) {
          // If the number is not zero and already exists in the set, it's invalid
          return false;
        }
        numSet.add(num);
      }
    }
    return true;
  }