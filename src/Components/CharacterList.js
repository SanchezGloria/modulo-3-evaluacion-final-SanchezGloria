import React from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
  // AQUÍ TENGO QUE MAPEAR

  renderCharacters() {
    if (this.props.resultStore !== undefined) {
      return this.props.resultStore.map((character) => character);
    }
  }

  render() {
    console.log(this.props.resultStore);
    console.log(this.renderCharacters());

    return (
      <ul>
        <CharacterCard resultStore={this.props.resultStore} />
      </ul>
    );
  }
}

export default CharacterList;
