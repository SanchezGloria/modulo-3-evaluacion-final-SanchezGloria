import React from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
  constructor(props) {
    super(props);
    this.renderCharacter = this.renderCharacter.bind(this);
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

  // renderCharacters() {
  //   if (this.props.resultStore !== undefined) {
  //     return this.props.resultStore.map((character) => this.renderCharacter(character));
  //   }
  // }

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

  render() {
    return <div>{this.renderCharacter(this.props.character)}</div>;
  }
}

export default CharacterCard;
