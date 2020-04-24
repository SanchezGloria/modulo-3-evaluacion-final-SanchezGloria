import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(ev) {
    this.props.handleInput(ev.currentTarget.value);
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }

  render() {
    return (
      <form className="main__page--form" onSubmit={this.handleSubmit}>
        <label className="main__page--label" htmlFor="name">
          Introduce un nombre:
        </label>
        <input className="main__page--input" onChange={this.handleInput} type="text" id="" name="name" value={this.props.name} placeholder="Ej. Rick" />
      </form>
    );
  }
}

Filters.propTypes = {
  handleInput: PropTypes.func,
  name: PropTypes.string,
};

export default Filters;
