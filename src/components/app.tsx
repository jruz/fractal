import React, { Component, Fragment } from 'react';
import './app.css';
import Theme from './theme.wrapper';

class App extends Component<any, any> {
  componentDidMount() {
    this.props.getContent();
  }
  render() {
    const { data, onClick, status } = this.props;
    switch (status) {
      case 'NOT_FOUND': {
        return <p>Indicator not found</p>;
      }
      case 'ERROR': {
        return <p>Connection error :(</p>;
      }
      case 'OK': {
        return (
          <div className="App">
            <div className="header">
              <div>Theme</div>
              <div>SubTheme</div>
              <div>Category</div>
              <div>Indicator</div>
            </div>
            <div onClick={(e) => onClick(e.target)}>
              {data.map((i: any) => i && <Theme {...i} key={i.id} />)}
            </div>
          </div>
        );
      }
      default: {
        return <p>loading...</p>;
      }
    }
  }
}

export default App;
