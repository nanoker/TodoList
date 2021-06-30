import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Tasks from './components/Tasks/Tasks';
import TodoListFooter from './components/TodoListFooter/TodoListFooter';

import './styles.scss';

function App() {
  const [listOfTodos, setListOfTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/listOfTodos')
      .then(res => {
        const listOfTodosDataBase = res.data;
        setListOfTodos(listOfTodosDataBase)
        });
      },[]);
  return (
    <div className="App">
      <Header />
      <TodoList updateListOfTodos={setListOfTodos} existingListOfTodos={listOfTodos}/>
      <Tasks updateListOfTodos={setListOfTodos} existingListOfTodos={listOfTodos} />
      <TodoListFooter existingListOfTodos={listOfTodos}/>
    </div>
  );
}

export default App;
