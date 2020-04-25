import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

class CharacterList extends React.Component {
  // AQUÍ TENGO QUE MAPEAR

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
    console.log(this.props.resultStore);

    // this.props.resultStore.sort(this.sortByName);
    if (this.props.resultStore.length === 0) {
      return <p className="main__page--no-results">{`No hay ningún personaje que coincida con la palabra ${this.props.name}`}</p>;
    } else {
      return (
        <ul className="main__page--list">
          {this.props.resultStore.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
        </ul>
      );
    }
  }
}

CharacterList.propTypes = {
  name: PropTypes.string,
  resultStore: PropTypes.array,
};

export default CharacterList;
