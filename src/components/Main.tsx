//@ts-nocheck
import React from 'react';
import { childrenProp } from '../App';
import { memo } from 'react';
import FilterTodo from './ui/tabs/FilterTodo';

const Main = memo(({ children }: childrenProp) => {
  console.log('render main');
  return (
    <main className='main'>
      <div className='main-wrapper'>
        <h1 className='main-title'>ToDo List</h1>
        <FilterTodo />
        <div className='main-list-wrapper'>{children}</div>
      </div>
    </main>
  );
});

export default Main;
