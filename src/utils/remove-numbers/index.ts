import { GRID } from 'typings';
import global from 'global';
import { getRandomIndex, copyGrid } from 'utils';

/**
 *
 * @param grid 9x9 full grid
 * @param attempts number of attempts to solve. Higher means more difficult. Default 5
 * @returns remove numbers from the grid to create a sudoku puzzle
 */
const removeNumbers = (grid: GRID, attempts = 5): GRID => {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();
    //if the block is already 0 it changes
    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }
    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);
    global.counter = 0;

    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }
  return grid;
};

export default removeNumbers;
