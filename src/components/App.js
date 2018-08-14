import React from 'react';

import Header from './Header.js';
import Content from './Content.js';
import ContestPreview from './ContestPreview';


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contest'
  };
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div className="Content">
          <Content />
          <div>
            {this.props.contests.map(contest =>
              <ContestPreview {...contest} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;