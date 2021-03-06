import React from 'react';
import { fetchResults } from '../Service/ServiceResults';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import CharacterDetail from './CharacterDetail';
import PageNotFound from './PageNotFound';
import '../Stylesheets/App.scss';

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

  // FETCH

  fetchNewResults() {
    fetchResults().then((data) => {
      this.setState({
        resultStore: data,
      });
      // console.log(this.state.resultStore);
    });
  }

  componentDidMount() {
    this.fetchNewResults();
  }

  handleInput(value) {
    this.setState({ name: value });
  }

  // FILTERS

  filteredCharacters() {
    const { resultStore, name } = this.state;
    const filteredCharacters = resultStore.filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    });
    filteredCharacters.sort(this.sortByName);
    return filteredCharacters;
  }

  sortByName(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  // GET LANDING AND C.DETAIL PAGES

  getLanding() {
    return <Landing name={this.state.name} handleInput={this.handleInput} resultStore={this.filteredCharacters()} />;
  }
  getCharacterDetail(props) {
    console.log(props.match.params.id);
    const { resultStore } = this.state;
    const clickedId = parseInt(props.match.params.id);
    const foundCharacter = resultStore.find((character) => character.id === clickedId);
    console.log();

    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      console.log('No existe');
      return <PageNotFound />;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header__page">
          <img className="header__page--title" src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="Rick and Morty" title="Rick and Morty" />
        </header>
        <main className="main__page">
          <Switch>
            <Route exact path="/" render={this.getLanding}></Route>
            <Route path="/character/:id" render={this.getCharacterDetail}></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
