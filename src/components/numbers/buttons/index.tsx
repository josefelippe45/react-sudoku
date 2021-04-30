import React, { FC, useCallback } from 'react';
import { NUMBERS, BLOCK_COORDS, N } from 'typings';
import { Button } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { fillBlock, IReducer } from 'reducers';

interface IProps {
  value: NUMBERS;
}
interface IState {
  selectedBlock?: BLOCK_COORDS;
  selectedValue: N;
}

const NumberButton: FC<IProps> = ({ value }) => {
  const { selectedValue, selectedBlock } = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const fill = useCallback(
    () =>
      selectedBlock &&
      selectedValue === 0 &&
      dispatch(fillBlock(value, selectedBlock)),
    [dispatch, selectedBlock, selectedValue, value]
  );
  return <Button onClick={fill}>{value}</Button>;
};

export default NumberButton;
