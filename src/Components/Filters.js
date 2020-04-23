import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Introduce un nombre:</label>
        <input onChange={this.handleInput} type="text" id="" name="name" value={this.props.name} placeholder="Ej. Rick" />
      </form>
    );
  }
}

export default Filters;
