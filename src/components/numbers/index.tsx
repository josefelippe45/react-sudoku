import React, { FC } from 'react';
import { NUMBERS } from 'typings';
import NumberButton from './buttons';
import { Container } from './styles';

const Numbers: FC = () => {
  return (
    <Container>
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((value) => (
        <NumberButton value={value} key={value}>
          {value}
        </NumberButton>
      ))}
    </Container>
  );
};

export default Numbers;
