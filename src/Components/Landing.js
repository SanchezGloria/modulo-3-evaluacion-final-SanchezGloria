import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class Landing extends React.Component {
  render() {
    return (
      <>
        <Filters name={this.props.name} handleInput={this.props.handleInput} />
        <CharacterList resultStore={this.props.resultStore} name={this.props.name} />
      </>
    );
  }
}

export default Landing;
