import { useRef, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { todoContext } from '../../providers/TodoProvider';

const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log('todoform render');
  const { todo, setTodo } = useContext(todoContext);

  const todoAdd = (text: string) => {
    const addTodo = {
      id: uuidv4(),
      text: text,
      isDone: false,
    };
    const newTodo = [...todo, addTodo];
    setTodo(newTodo);
    localStorage.setItem('todolist', JSON.stringify(newTodo));
  };
  return (
    <form
      className='main-list-form'
      onSubmit={(e) => {
        e.preventDefault();
        const newText = inputRef.current?.value;
        if (newText) {
          todoAdd(newText);
        } else {
          alert('Такая задача уже есть!');
        }
      }}
    >
      <input
        type='text'
        className='main-input'
        placeholder='Сделать удаление завершенных и всех'
        ref={inputRef}
      />
      <button type='submit' className='main-add'>
        Добавить
      </button>
    </form>
  );
};

export default TodoForm;
