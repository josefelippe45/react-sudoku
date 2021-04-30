import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IReducer, selectBlock } from 'reducers';
import { INDEX, N } from 'typings';
import { Dispatch, AnyAction } from 'redux';
import { Container } from './styles';

interface BlockProps {
  columnIndex: INDEX;
  rowIndex: INDEX;
}
interface IState {
  value: N;
  isActive: boolean;
  isPuzzle: boolean;
}
const Block: FC<BlockProps> = ({ columnIndex, rowIndex }) => {
  const { value, isActive, isPuzzle } = useSelector<IReducer, IState>(
    ({ challengeGrid, workingGrid, selectedBlock }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === columnIndex
        : false,
      value: workingGrid ? workingGrid[rowIndex][columnIndex] : 0,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][columnIndex] !== 0
          ? true
          : false,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const handleClick = () => {
    !isActive && dispatch(selectBlock([rowIndex, columnIndex]));
  };
  return (
    <Container
      active={isActive}
      data-cy={`block-${rowIndex}-${columnIndex}`}
      onClick={handleClick}
      puzzle={isPuzzle}
    >
      {value === 0 ? '' : value}
    </Container>
  );
};
export default Block;
