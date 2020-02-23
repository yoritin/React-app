import React from "react";
import Sample from './Sample'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Hello world</p>
        <Sample num={"5"} />
      </React.Fragment>
    );
  }
}

export default App;
