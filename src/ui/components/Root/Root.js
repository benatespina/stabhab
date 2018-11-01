import React, {Component} from 'react';

import App from './../App/App';

export let handleReset = () => {};

class Root extends Component {
  state = {
    iteration: 0,
  };

  handleReset = () => this.setState(prevState => ({iteration: prevState.iteration + 1}));

  componentDidMount() {
    handleReset = this.handleReset;
  }

  render() {
    return <App key={this.state.iteration} />;
  }
}

export default Root;
