import { GRID } from 'typings';

/**
 * Checks if grid is full
 * @param grid 9x9 sudoku grid
 */
const checkGrid = (grid: GRID): boolean => {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) if (grid[i][j] === 0) return false;
  return true;
};

export default checkGrid;
