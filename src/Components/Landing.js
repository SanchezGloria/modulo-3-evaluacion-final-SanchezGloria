import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import PropTypes from 'prop-types';

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

Landing.propTypes = {
  name: PropTypes.string,
  handleInput: PropTypes.func,
  resultStore: PropTypes.array,
};

export default Landing;
