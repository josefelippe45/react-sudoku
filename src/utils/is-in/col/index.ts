import { GRID, NUMBERS } from 'typings';

interface IInput {
  grid: GRID;
  col: number;
  value: NUMBERS;
}
/**
 * Check if value is being used in current grid column
 * @param input Object with 9x9 sudoku grid, row index and value
 */
const isInCol = ({ col, grid, value }: IInput): boolean => {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
};

export default isInCol;
