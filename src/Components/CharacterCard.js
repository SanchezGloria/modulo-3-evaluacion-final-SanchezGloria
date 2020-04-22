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
  render() {
    console.log(this.props);

    return <div>{this.renderCharacters()}</div>;
  }
}

export default CharacterCard;
