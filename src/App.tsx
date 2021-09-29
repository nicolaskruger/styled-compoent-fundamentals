import React from 'react';
import './App.css';
import { RouterBuilder } from './routes';
import { GoHomeComponent } from './ui/components';

function App() {
  return (
    <>
      <RouterBuilder >
        <GoHomeComponent />
      </RouterBuilder>
    </>
  );
}

export default App;
