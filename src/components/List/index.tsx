import React from 'react';
import Item from '../Item';

interface ListProps {
  todoList: {
    id: number,
    content: string
    dateAt: number
  }[],
  deleteTodo: (id: number) => void,
  getItem: (id: number) => void
}

const List = ({todoList, deleteTodo, getItem}: ListProps) => {
  const sortTodoList = todoList.sort((a, b) => b.dateAt - a.dateAt);

  return (
    <div className='todo-list'>
      {
        sortTodoList.map(todo => {
          return <Item getItem={getItem} deleteTodo={deleteTodo} key={todo.id} todo={todo}/>
        })
      }
    </div>
  )
}

export default List
