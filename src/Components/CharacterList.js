import React from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
  render() {
    console.log(this.props.resultStore);

    return (
      <ul>
        <CharacterCard resultStore={this.props.resultStore} />
      </ul>
    );
  }
}

export default CharacterList;
