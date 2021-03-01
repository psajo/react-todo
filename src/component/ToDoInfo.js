import React, { Component } from 'react';

class ToDoInfo extends Component {
  state = {
    toggle: false,
    text  : '',
    style : {
      margin: '10px',
    },
  };

  handleChange = ( e ) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleToggleChange = () => {
    const { toggle, text } = this.state;
    const { data, onUpdate } = this.props;
    // false -> true
    if (!toggle) {
      this.setState({
        text  : data.text,
        toggle: true,
      });
    } else {
      onUpdate(data.id, { text: text,isDone: data.isDone });
      this.setState({
        toggle: false,
      });
    }
    // ture -> false
  };

  handleRemove = () => {
    const { data, onRemove } = this.props;
    onRemove(data.id);
  };
  handleCheck = () => {
      const { data, onCheck} = this.props;
      onCheck(data.id, { text: data.text, isDone: !data.isDone })
  }

  render() {
    const { data } = this.props;
    const { toggle, text } = this.state;
    console.log(data.text + ' 렌더링 됐어유');
    return (
      <div>
        <input type='checkbox' checked={data.isDone?true:false} onChange={this.handleCheck}/>
        {toggle ? (
          <input
            style={this.state.style}
            onChange={this.handleChange}
            value={text}
            name="text"
          ></input>
        ) : (
          <span style={this.state.style}>{data.text}</span>
        )}
        <button onClick={this.handleToggleChange}>{toggle ? '적용' : '수정'}</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default ToDoInfo;