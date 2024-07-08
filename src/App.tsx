import { useState, useEffect, Children, useContext } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/ui/Header';
import React from 'react';
import TodoForm from './components/ui/TodoForm';
import List from './components/List';
import TodoList from './components/ui/TodoList';
import Footer from './components/Footer';
import DeleteButtons from './components/ui/buttons/DeleteButtons';
import FilterTodo from './components/ui/tabs/FilterTodo';

import TodoProvider from './providers/TodoProvider';
export interface childrenProp {
  children: JSX.Element | React.ReactNode;
}

const App = () => {
  return (
    <TodoProvider>
      <Main>
        <Header>
          <TodoForm></TodoForm>
        </Header>
        <List>
          <TodoList></TodoList>
        </List>
        <Footer>
          <DeleteButtons></DeleteButtons>
        </Footer>
      </Main>
    </TodoProvider>
  );
};

export default App;
