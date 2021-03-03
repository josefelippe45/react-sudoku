import { NUMBERS, SQUARE } from 'typings';

interface IInput {
  square: SQUARE;
  value: NUMBERS;
}
/**
 * check if value is being used in current square
 * @param input Object with 3x3 square and value
 */
const isInSquare = ({ square, value }: IInput): boolean => {
  return [...square[0], ...square[1], ...square[2]].includes(value);
};

export default isInSquare;
