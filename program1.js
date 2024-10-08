const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let count = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (i, j) => {
      // If out of bounds or water, stop recursion
      if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 'W') return;

      // Mark the landmass as visited by setting it to water
      grid[i][j] = 'W';

      // Visit all neighboring landmasses (up, down, left, right)
      dfs(i - 1, j); // up
      dfs(i + 1, j); // down
      dfs(i, j - 1); // left
      dfs(i, j + 1); // right
  };

  // Traverse the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              // Found a new island
              count++;
              // Start DFS to mark all connected landmasses
              dfs(i, j);
          }
      }
  }

  return count;
};

module.exports = getTotalIsles;