import NewButton from 'components/new-button';
import React from 'react';
import { Content, Grid, Card, Numbers, Title } from './components';
function App() {
  return (
    <Content>
      <Title>Sudoku</Title>
      <Card>
        <NewButton />
        <Grid />
        <Numbers />
      </Card>
    </Content>
  );
}

export default App;
