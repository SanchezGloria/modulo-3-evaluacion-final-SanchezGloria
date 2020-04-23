import React from 'react';
import { Link } from 'react-router-dom';

class CharacterDetail extends React.Component {
  renderCharacter(character) {
    const statusIcon = character.status === 'Alive' ? '😀' : '💀';
    if (character !== undefined) {
      return (
        <div className="detail__page--container">
          <img className="detail__page--img" src={character.image} alt={character.name} title={character.name}></img>
          <div className="detail__page--container-text">
            <h3 className="detail__page--name">{character.name}</h3>
            <p className="detail__page--info">{character.species}</p>
            <p className="detail__page--info">{statusIcon}</p>
            <p className="detail__page--info">{`Origen: ${character.origin.name}`}</p>
            <p className="detail__page--info">{`Aparece en ${character.episode.length} episodios`}</p>
          </div>
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
        <Link to="/" className="detail__page--close">
          <i class="fas fa-window-close"></i>
        </Link>
      </>
    );
  }
}

export default CharacterDetail;
