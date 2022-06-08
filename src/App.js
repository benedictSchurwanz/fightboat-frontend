import React from 'react';
import BoardGrid from './components/BoardGrid';

import MainHeader from './components/MainHeader'

import './index.css';

function App() {
  return (
    <div className="app-container">
      <MainHeader />
      <BoardGrid />
    </div>
  );
}

export default App;
