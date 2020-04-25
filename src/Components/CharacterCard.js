import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
  constructor(props) {
    super(props);
    this.renderCharacter = this.renderCharacter.bind(this);
  }

  renderCharacter(character) {
    return (
      <li className="main__page--list--item" key={character.id} id={character.id}>
        <Link className="child" to={`/character/${character.id}`}>
          <img className="main__page--list--item--img" src={character.image} alt={character.name} title={character.name}></img>
          <h3 className="main__page--list--item--name">{character.name}</h3>
          <p className="main__page--list--item--specie">{character.species}</p>
        </Link>
      </li>
    );
  }

  // renderCharacters() {
  //   if (this.props.resultStore !== undefined) {
  //     return this.props.resultStore.map((character) => this.renderCharacter(character));
  //   }
  // }

  // sortByName(a, b) {
  //   const nameA = a.name.toUpperCase();
  //   const nameB = b.name.toUpperCase();

  //   let comparison = 0;
  //   if (nameA > nameB) {
  //     comparison = 1;
  //   } else if (nameA < nameB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }

  render() {
    return <div className="main__page--list--container">{this.renderCharacter(this.props.character)}</div>;
  }
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
