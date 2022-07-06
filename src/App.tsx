import React, { useState, useReducer } from 'react';
import {List, Form} from './components/index';
import './App.css';
interface Todo {
  id: number, 
  content: string,
  dateAt: number
}

function App() {
  const [ todoList, setTodoList ] = useState(JSON.parse(localStorage.getItem("todoList") || "") || []);
  const [ todoItem,  setTodoItem ] = useState<Todo | null>(null);
  const [ nameForm, setNameForm ] = useState("Create");

  const addTodo = (data: Todo) => {
    setNameForm("Create");
    const newTodoList = [...todoList];
    newTodoList.push(data);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  }

  const deleteTodo = (id: number) => {
    const newTodoList = [...todoList].filter(item => item.id !== id);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  }

  const getItem = (id: number) => {
    setNameForm("Save")
    const newTodoItem = [...todoList].find(todoItem => todoItem.id === id);
    if(newTodoItem) {
      setTodoItem(newTodoItem);
    }
  }

  const updateItem = (data: Todo) => {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((item) => item.id === data.id);
    newTodoList.splice(index, 1);
    setTodoList([...newTodoList, data]);
    localStorage.setItem("todoList", JSON.stringify([...newTodoList, data]));
    setNameForm("Create");
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <Form todoItem={todoItem} nameForm={nameForm} updateItem={updateItem} addTodo={addTodo}/>
      <List getItem={getItem} deleteTodo={deleteTodo} todoList={todoList}/>
    </div>
  );
}

export default App;
