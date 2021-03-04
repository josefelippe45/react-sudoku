import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from 'reducers';
import { N } from 'typings';
import { Container } from './styles';

interface BlockProps {
  columnIndex: number;
  rowIndex: number;
}
interface IState {
  value: N;
}
const Block: FC<BlockProps> = ({ columnIndex, rowIndex }) => {
  const { value } = useSelector<IReducer, IState>(({ grid }) => ({
    value: grid ? grid[rowIndex][columnIndex] : 0,
  }));
  return (
    <Container data-cy={`block-${rowIndex}-${columnIndex}`}>
      {value === 0 ? '' : value}
    </Container>
  );
};
export default Block;
