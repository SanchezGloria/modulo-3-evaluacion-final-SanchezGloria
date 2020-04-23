import React from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
  constructor(props) {
    super(props);
    this.renderCharacters = this.renderCharacters.bind(this);
  }

  renderCharacter(character) {
    return (
      <li key={character.id} id={character.id}>
        <Link to={`/character/${character.id}`}>
          <img src={character.image} alt={character.name} title={character.name}></img>
          <h3>{character.name}</h3>
          <p>{character.species}</p>
        </Link>
      </li>
    );
  }

  renderCharacters() {
    if (this.props.resultStore !== undefined) {
      return this.props.resultStore.map((character) => this.renderCharacter(character));
    }
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

  // this.props.resultStore.sort(sortByName("name"));

  // sortByName() {
  //   const namesSorted = this.props.resultStore.sort((a, b) => a.name - b.name);
  //   return namesSorted;
  // }

  // const { resultStore, name } = this.state;
  // const filteredCharacters = resultStore.filter((character) => {
  //   return character.name.toUpperCase().includes(name.toUpperCase());
  // });
  // return filteredCharacters;
  render() {
    // console.log(this.props.resultStore.sort(this.sortByName));
    this.props.resultStore.sort(this.sortByName);
    return <div>{this.renderCharacters()}</div>;
  }
}

export default CharacterCard;
