import { GRID, NUMBERS } from 'typings';
import { isInRow, isInCol, shuffle } from 'utils';

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recursive function to check all the possible combinations of numbers until a solution is found
 * @param grid
 */

const fillGrid = (grid: GRID) => {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;
    if (grid[row][col] === 0) {
      shuffle(numbers);
      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            grid[row][col] = value;
          }
        }
      }
      break;
    }
  }
  grid[row][col] = 0;
};

export default fillGrid;
