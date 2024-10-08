// program1.js

const getTotalIsles = (grid) => {
  if (!grid || grid.length === 0) return 0;  // Base case: if grid is empty

  let numberOfIslands = 0;

  const dfs = (i, j) => {
      // Check bounds and whether the cell is land
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
          return;
      }

      // Mark the land as visited
      grid[i][j] = 'W';  // Change 'L' to 'W' to mark as visited

      // Explore all four directions
      dfs(i + 1, j); // Down
      dfs(i - 1, j); // Up
      dfs(i, j + 1); // Right
      dfs(i, j - 1); // Left
  };

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 'L') {  // Found an unvisited land
              numberOfIslands++;
              dfs(i, j);  // Start DFS to mark all connected lands
          }
      }
  }

  return numberOfIslands;  // Return total number of islands
};

module.exports = getTotalIsles;
