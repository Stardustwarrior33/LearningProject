import React from 'react';

import Header from './Header.js';
import Content from './Content.js';


const App = () => {
  return (
    <div className="App">
      <Header message="Naming Contests" />
      <div className="Content">
        <Content />
      </div>
    </div>
  );
};

export default App;