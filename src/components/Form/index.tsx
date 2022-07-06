import React, { useEffect, useState } from 'react';

interface Todo {
  id: number, 
  content: string,
  dateAt: number
}

interface FormProps {
  addTodo: (data: Todo) => void,
  nameForm: string,
  todoItem: Todo | null,
  updateItem: (data: Todo) => void
}

const Form = ({addTodo, nameForm, todoItem, updateItem}: FormProps) => {

  const [ content, setContent ] = useState(todoItem?.content);

  useEffect(() => {
    setContent(todoItem?.content)
  }, [todoItem]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const randomId = Math.floor(Math.random() * 999);
    const date = new Date();

    if(content && nameForm === "Create") {
      const formatData = {
        id: randomId,
        content,
        dateAt: date.getTime()
      }
      addTodo(formatData);
      setContent('');
    }

    if(content !== todoItem?.content && nameForm === "Save") {
      const formatData = {
        id: todoItem?.id,
        content,
        dateAt: date.getTime()
      }
      updateItem(formatData as Todo);
      setContent('');
    }
  }
  
  return (
    <form onSubmit={submit} className='todo-list-form'>
      <input value={content} onChange={handleChange} type="text" />
      <button type='submit'>{nameForm}</button>
    </form>
  )
}

export default Form
