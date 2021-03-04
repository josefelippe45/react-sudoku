import React, { FC, Children, useCallback, useEffect } from 'react';
import useMouseTrap from 'react-hook-mousetrap';
import { useDispatch, useSelector } from 'react-redux';
import { createGrid, IReducer, selectBlock } from 'reducers';
import { AnyAction, Dispatch } from 'redux';
import { BLOCK_COORDS, INDEX } from 'typings';
import Block from './block';
import { Container, Row } from './styles';

interface IState {
  selectedBlock?: BLOCK_COORDS;
}

const Grid: FC = () => {
  const { selectedBlock } = useSelector<IReducer, IState>(
    ({ selectedBlock }) => ({
      selectedBlock,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  useEffect(() => {
    create();
  }, [create]);
  const moveDown = () => {
    selectedBlock &&
      selectedBlock[0] < 8 &&
      dispatch(
        selectBlock([(selectedBlock[0] + 1) as INDEX, selectedBlock[1]])
      );
  };
  const moveLeft = () => {
    selectedBlock &&
      selectedBlock[1] > 0 &&
      dispatch(
        selectBlock([selectedBlock[0], (selectedBlock[1] - 1) as INDEX])
      );
  };
  const moveRight = () => {
    selectedBlock &&
      selectedBlock[1] < 8 &&
      dispatch(
        selectBlock([selectedBlock[0], (selectedBlock[1] + 1) as INDEX])
      );
  };
  const moveUp = () => {
    selectedBlock &&
      selectedBlock[0] > 0 &&
      dispatch(
        selectBlock([(selectedBlock[0] - 1) as INDEX, selectedBlock[1]])
      );
  };

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
