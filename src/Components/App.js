import React from 'react';
import { fetchResults } from '../Service/ServiceResults';
import CharacterList from './CharacterList';
import Filters from './Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultStore: [],
      name: '',
    };
    this.handleInput = this.handleInput.bind(this);
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

  handleInput(value) {
    this.setState({ name: value });
    console.log(this.state.name);
  }

  filteredCharacters() {
    const { resultStore, name } = this.state;
    const filteredCharacters = resultStore.filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    });
    return filteredCharacters;
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <header>
          <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="Rick and Morty" title="Rick and Morty" />
        </header>
        <main>
          <Filters name={name} handleInput={this.handleInput} />
          <CharacterList resultStore={this.filteredCharacters()} name={name} />
        </main>
      </div>
    );
  }
}

export default App;
