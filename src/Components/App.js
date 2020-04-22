import React from 'react';
import { fetchResults } from '../Service/ServiceResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultStore: [],
    };
  }

  fetchNewResults() {
    fetchResults().then((data) => {
      this.setState({
        resultStore: data,
      });
      console.log(this.state.resultStore);
    });
  }

  componentDidMount() {
    this.fetchNewResults();
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
