import React from 'react'

interface ItemProps {
  todo: {
    id: number,
    content?: string
  },
  deleteTodo: (id: number) => void,
  getItem: (id: number) => void
}

const Item = ({todo, deleteTodo, getItem}: ItemProps) => {

  return (
    <>
      <div className='todo-item'>
        <p>{todo.content}</p>
        <div>
          <button onClick={() => getItem(todo.id)}><i className="fa fa-pencil"></i></button>
          <button onClick={() => deleteTodo(todo.id)}><i className="fa fa-trash"></i></button>
        </div>
      </div>
    </>
  )
}

export default Item
