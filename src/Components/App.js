import React from 'react';
import { fetchResults } from '../Service/ServiceResults';
import CharacterList from './CharacterList';

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
    const { resultStore } = this.state;
    return (
      <div className="App">
        <header>
          <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="Rick and Morty" title="Rick and Morty" />
        </header>
        <main>
          <CharacterList resultStore={resultStore} />
        </main>
      </div>
    );
  }
}

export default App;
