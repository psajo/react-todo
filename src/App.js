import React, { Component } from 'react';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';
import './App.css';
class App extends Component {
  id = 4;
  state = {
    toDoList: [
      {
        id: 1,
        text: '스프링부트',
        isDone:true,
      },
      {
        id: 2,
        text: 'Node.js',
        isDone:true,
      },
      {
        id: 3,
        text: '리액트',
        isDone:false,
      },
    ],
    search: '',
  };

  handleCreate = (data) => {
    const { toDoList } = this.state;
    this.setState({
      toDoList: toDoList.concat({
        id: this.id++,
        ...data,
      }),
    });
  };
  handleUpdate = (id, data) => {
    const { toDoList } = this.state;

    this.setState({
      toDoList: toDoList.map((toDoList) => {
        console.log(toDoList);
        if (toDoList.id === id) {
          console.log(toDoList.id + ' / ' + id);
          return {
            id,
            ...data,
          };
        }
        return toDoList;
      }),
    });
  };
  handleRemove = (id) => {
    const { toDoList } = this.state;

    this.setState({
      toDoList: toDoList.filter((data) => data.id !== id),
    });
  };
  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleCheck = (id,data) => {
    const { toDoList } = this.state;
    this.setState({
      toDoList: toDoList.map((toDoList) => {
        console.log(toDoList);
        if (toDoList.id === id) {
          console.log(toDoList.id + ' / ' + id);
          return {
            id,
            ...data,
          };
        }
        return toDoList;
      }),
    })
  }

  render() {
    const { toDoList, search } = this.state;
    return (
      <div>
        <ToDoForm onCreate={this.handleCreate} />
        <input value={search} name="search" onChange={this.handleSearch} placeholder="검색어를 입력하세요" />
        <ToDoList
          data={toDoList.filter((data) => data.text.indexOf(search) !== -1)}
          onUpdate={this.handleUpdate}
          onRemove={this.handleRemove}
          onCheck={this.handleCheck}
        />
      </div>
    );
  }
}

export default App;