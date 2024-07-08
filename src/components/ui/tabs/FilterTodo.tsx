import { useContext } from 'react';
import { todoContext } from '../../../providers/TodoProvider';

const FilterTodo = () => {
  const { todo, setTodo } = useContext(todoContext);
  const localTodo = JSON.parse(localStorage.getItem('todolist'));
  const filterActive = () => {
    const filteredTodo = localTodo.filter((item: any) => {
      return item.isDone == false;
    });
    setTodo(filteredTodo);
  };
  const filterCompleted = () => {
    const filteredTodo = localTodo.filter((item: any) => {
      return item.isDone == true;
    });
    if (filteredTodo.length >= 1) {
      setTodo(filteredTodo);
    }
  };
  const filterAll = () => {
    setTodo(localTodo);
  };
  return (
    <div className='main-tabs'>
      <div className='main-tabs-active active' onClick={() => filterActive()}>
        Active
      </div>
      <div className='main-tabs-completed' onClick={() => filterCompleted()}>
        Completed
      </div>
      <div className='main-tabs-all' onClick={() => filterAll()}>
        All
      </div>
    </div>
  );
};
export default FilterTodo;
