import React from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
  // AQUÍ TENGO QUE MAPEAR

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
    console.log(this.props.resultStore);

    this.props.resultStore.sort(this.sortByName);
    if (this.props.resultStore.length === 0) {
      return <p>{'NO HAY PERSONAJES'}</p>;
    } else {
      return (
        <ul>
          {this.props.resultStore.map((character) => {
            return <CharacterCard character={character} />;
          })}
        </ul>
      );
    }
  }
}

export default CharacterList;
