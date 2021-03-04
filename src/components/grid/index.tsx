import React, { FC, Children, useCallback, useEffect } from 'react';
import useMouseTrap from 'react-hook-mousetrap';
import { useDispatch } from 'react-redux';
import { createGrid } from 'reducers';
import { AnyAction, Dispatch } from 'redux';
import { INDEX } from 'typings';
import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  useEffect(() => {
    create();
  }, [create]);
  const moveDown = () => {
    console.log('down');
  };
  const moveLeft = () => {
    console.log('left');
  };
  const moveRight = () => {
    console.log('right');
  };
  const moveUp = () => {
    console.log('up');
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
