import React, { Component } from 'react';

class ToDoForm extends Component {
  state = {
    text: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      text: '',
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={text} name="text" placeholder="할일을 입력하세요" onChange={this.handleChange}></input>
          <button type="submit">추가</button>
        </form>
      </div>
    );
  }
}

export default ToDoForm;