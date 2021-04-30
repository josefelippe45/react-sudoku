import React, { FC, Children, useCallback, useEffect } from 'react';
import useMouseTrap from 'react-hook-mousetrap';
import { useDispatch, useSelector } from 'react-redux';
import { createGrid, fillBlock, IReducer, selectBlock } from 'reducers';
import { AnyAction, Dispatch } from 'redux';
import { BLOCK_COORDS, GRID, INDEX, N, NUMBERS } from 'typings';
import Block from './block';
import { Container, Row } from './styles';

interface IState {
  selectedBlock?: BLOCK_COORDS;
  selectedValue?: N;
  solvedGrid?: GRID;
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, solvedGrid, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  useEffect(() => {
    if (state.solvedGrid) create();
  }, [create, state.solvedGrid]);

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0)
        dispatch(fillBlock(n, state.selectedBlock));
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  );

  const moveDown = () => {
    state.selectedBlock &&
      state.selectedBlock[0] < 8 &&
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
  };
  const moveLeft = () => {
    state.selectedBlock &&
      state.selectedBlock[1] > 0 &&
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      );
  };
  const moveRight = () => {
    state.selectedBlock &&
      state.selectedBlock[1] < 8 &&
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      );
  };
  const moveUp = () => {
    state.selectedBlock &&
      state.selectedBlock[0] > 0 &&
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
  };
  useMouseTrap('1', () => fill(1));
  useMouseTrap('2', () => fill(2));
  useMouseTrap('3', () => fill(3));
  useMouseTrap('4', () => fill(4));
  useMouseTrap('5', () => fill(5));
  useMouseTrap('6', () => fill(6));
  useMouseTrap('7', () => fill(7));
  useMouseTrap('8', () => fill(8));
  useMouseTrap('9', () => fill(9));

  useMouseTrap('down', moveDown);
  useMouseTrap('left', moveLeft);
  useMouseTrap('right', moveRight);
  useMouseTrap('up', moveUp);
  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row key={rowIndex}>
            {Children.toArray(
              [...Array(9)].map((_, columnIndex) => (
                <Block
                  columnIndex={columnIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
