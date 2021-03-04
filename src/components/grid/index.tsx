import React, { FC, Children, useCallback, useEffect } from 'react';
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
