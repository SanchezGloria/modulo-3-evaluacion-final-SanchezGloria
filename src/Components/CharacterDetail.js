import React from 'react';
import { Link } from 'react-router-dom';

class CharacterDetail extends React.Component {
  renderCharacter(character) {
    if (character !== undefined) {
      return (
        <div>
          <img src={character.image} alt={character.name} title={character.name}></img>
          <h3>{character.name}</h3>
          <p>{character.species}</p>
          <p>{character.origin.name}</p>
          <p>{`Aparece en ${character.episode.length} episodios`}</p>
        </div>
      );
    }
  }
  render() {
    const { character } = this.props;
    console.log(character.origin);

    return (
      <>
        {this.renderCharacter(character)}
        <Link to="/">Close</Link>
      </>
    );
  }
}

export default CharacterDetail;
