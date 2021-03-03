import React, { FC, Children } from 'react';
import { createFullGrid } from 'utils';
import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
  const grid = createFullGrid();
  console.log(grid);
  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row key={rowIndex}>
            {Children.toArray(
              [...Array(9)].map((_, columnIndex) => (
                <Block columnIndex={columnIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
