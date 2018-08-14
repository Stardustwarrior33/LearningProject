import React from 'react';

import Header from './Header.js';
import Content from './Content.js';


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contest'
  };
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div className="Content">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;