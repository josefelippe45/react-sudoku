import React, { FC, Children } from 'react';

import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
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
