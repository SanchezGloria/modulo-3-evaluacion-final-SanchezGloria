import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(ev) {
    this.props.handleInput(ev.currentTarget.value);
  }
  render() {
    return (
      <form>
        <label htmlFor="name">Introduce un nombre:</label>
        <input onChange={this.handleInput} type="text" id="" name="name" value={this.props.name} placeholder="Ej. Rick" />
      </form>
    );
  }
}

export default Filters;
