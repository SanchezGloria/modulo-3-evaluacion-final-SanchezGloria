import React from 'react';
import { fetchResults } from '../Service/ServiceResults';
import { Route, Switch } from 'react-router-dom';
// import CharacterList from './CharacterList';
// import Filters from './Filters';
import Landing from './Landing';
import CharacterDetail from './CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultStore: [],
      name: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.getLanding = this.getLanding.bind(this);
    this.getCharacterDetail = this.getCharacterDetail.bind(this);
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

  getLanding() {
    return <Landing name={this.state.name} handleInput={this.handleInput} resultStore={this.filteredCharacters()} />;
  }
  getCharacterDetail(props) {
    console.log(props.match.params.id);
    const { resultStore } = this.state;
    const clickedId = parseInt(props.match.params.id);
    const character = resultStore.find((character) => character.id === clickedId);
    return <CharacterDetail character={character} />;
  }

  render() {
    console.log(this.getCharacterDetail);

    return (
      <div className="App">
        <header>
          <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="Rick and Morty" title="Rick and Morty" />
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={this.getLanding}></Route>
            <Route path="/character/:id" render={this.getCharacterDetail}></Route>
            {/* <Filters name={name} handleInput={this.handleInput} />
            <CharacterList resultStore={this.filteredCharacters()} name={name} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
