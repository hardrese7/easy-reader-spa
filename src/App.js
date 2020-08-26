import React from 'react';
import { Button } from '@material-ui/core';
import cn from './App.module.scss';
import 'src/styles/global.scss';

function App() {
  return (
    <Button className={cn.Button} color="primary">
      Hello World
    </Button>
  );
}

export default App;
