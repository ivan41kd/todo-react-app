import { useRef, useState, useContext } from 'react';
import { todoContext } from '../../providers/TodoProvider';
const TodoList = () => {
  const { todo, setTodo } = useContext(todoContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const [editedId, setEditedId] = useState<string>('');

  const deleteTodo = (id: string) => {
    const newTodo = todo.filter((item: any) => {
      return item.id != id;
    });
    localStorage.setItem('todolist', JSON.stringify(newTodo));
    setTodo(newTodo);
  };

  const checkIsDone = (id: string) => {
    const newTodo = todo.map((item: any) => {
      return item.id == id ? { ...item, isDone: !item.isDone } : item;
    });
    localStorage.setItem('todolist', JSON.stringify(newTodo));
    setTodo(newTodo);
  };

  const saveTask = (id: number, value: string) => {
    const newTodo = todo.map((item: any) => {
      return item.id == id ? { ...item, text: value } : item;
    });
    localStorage.setItem('todolist', JSON.stringify(newTodo));
    setTodo(newTodo);
    setEditedId('');
  };
  if (todo.length >= 1) {
    return (
      <div className='main-list'>
        {todo.map((el: object | any) => (
          <li key={el.id} className='main-option'>
            <div className='main-option-item'>
              <input
                type='checkbox'
                className='main-checkbox'
                id={el.id}
                onChange={() => {
                  checkIsDone(el.id);
                }}
                defaultChecked={el.isDone}
              />
              {editedId === el.id ? (
                <input
                  type='text'
                  className='main-input-change'
                  placeholder={el.text}
                  ref={inputRef}
                />
              ) : (
                <p className='main-task'>{el.text}</p>
              )}
            </div>
            <div className='main-buttons-wrapper'>
              {editedId === el.id ? (
                <p
                  className='main-save'
                  onClick={() => {
                    if (
                      inputRef.current &&
                      inputRef.current.value.trim() !== ''
                    ) {
                      saveTask(el.id, inputRef.current.value);
                    } else {
                      saveTask(el.id, el.text);
                    }
                  }}
                >
                  ✅
                </p>
              ) : (
                <p
                  className='main-change'
                  data-testid='change-icon'
                  onClick={() => setEditedId(el.id)}
                >
                  ✏️
                </p>
              )}
              <p className='main-delete' onClick={() => deleteTodo(el.id)}>
                ❌
              </p>
            </div>
          </li>
        ))}
      </div>
    );
  }
};

export default TodoList;
