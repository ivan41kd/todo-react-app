import { useContext } from 'react';

import { todoContext } from '../../../providers/TodoProvider';

const DeleteButtons = () => {
  const { todo, setTodo } = useContext(todoContext);
  const deleteCompleted = () => {
    const newTodo = todo.filter((item) => {
      return item.isDone != true;
    });
    setTodo(newTodo);
    localStorage.setItem('todolist', JSON.stringify(newTodo));
  };

  const deleteAll = () => {
    setTodo([]);
    localStorage.setItem('todolist', JSON.stringify([]));
  };
  return (
    <div className='main-footer-wrapper'>
      <button
        className='main-delete-completed'
        onClick={() => deleteCompleted()}
      >
        Удалить завершенные
      </button>
      <button className='main-delete-all' onClick={() => deleteAll()}>
        Удалить все
      </button>
    </div>
  );
};
export default DeleteButtons;
