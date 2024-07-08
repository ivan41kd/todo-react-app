import { createContext, useEffect, useState } from 'react';
import { childrenProp } from '../App';

export interface TodoProps {
  todo: { text: string; id: string; isDone: boolean }[];
  setTodo: (todo: any) => void;
}

export interface State {
  array: Array<{ text: string; id: string; isDone: boolean }>;
}

export interface Action {
  type: 'add' | 'delete' | 'edit' | 'check' | 'clearcompleted' | 'clearall';
}
export const todoContext = createContext();

const TodoProvider = ({ children }: childrenProp) => {
  const [todo, setTodo] = useState<Array<any>>([]);
  const localTodo = JSON.parse(localStorage.getItem('todolist'));
  useEffect(() => {
    if (localTodo != undefined || null) {
      setTodo(localTodo);
    }
  }, []);

  return (
    <todoContext.Provider value={{ todo, setTodo }}>
      {children}
    </todoContext.Provider>
  );
};
export default TodoProvider;
