import React, { FC, useCallback } from 'react';
import { Button } from 'components/styles';
import { useDispatch } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { createGrid } from 'reducers';

const NewButton: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>();
  const createNewGrid = useCallback(() => {
    if (window.confirm('Start new game?')) dispatch(createGrid());
  }, [dispatch]);
  return <Button onClick={createNewGrid}>New Game</Button>;
};
export default NewButton;
