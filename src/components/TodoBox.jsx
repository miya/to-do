import { React, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoBox = () => {
  const [todo, setTodo] = useState('');

  const [todoList, setTodoList] = useState([]);

  const initTodoList = () => {
    const defaultTodoList = [
      { text: 'task-1', done: false },
      { text: 'task-2', done: false },
      { text: 'task-3', done: false },
      { text: 'task-4', done: false },
    ];
    const localItem = JSON.parse(localStorage.getItem('todoList'));
    if (!localItem || localItem.length === 0) {
      setTodoList(defaultTodoList);
    } else {
      setTodoList(localItem);
    }
  };

  const updateLocalStorage = (item) => {
    const localItem = JSON.stringify(item);
    localStorage.setItem('todoList', [localItem]);
  };

  const inputTodoHandler = (event) => {
    setTodo(event.target.value);
  };

  const addTodoListHandler = () => {
    const newTodoList = [...todoList];
    newTodoList.unshift({
      text: todo,
      done: false,
    });
    setTodoList(newTodoList);
    setTodo('');
    updateLocalStorage(newTodoList);
  };

  const deleteTodoListHandler = (event, index) => {
    event.preventDefault();
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    updateLocalStorage(newTodoList);
  };

  const changeTodoListHandler = (event) => {
    const index = event.target.id;
    const newTodoList = [...todoList];
    const text = newTodoList[index].text;
    const done = !newTodoList[index].done;
    newTodoList.splice(index, 1, { text, done });
    setTodoList(newTodoList);
    updateLocalStorage(newTodoList);
  };

  useEffect(() => {
    initTodoList();
  }, []);

  return (
    <>
      <Card className="mx-3 mt-3">
        <Card.Body>
          {/* TodoFormComponent */}
          <TodoForm
            todo={todo}
            inputTodoHandler={inputTodoHandler}
            addTodoListHandler={addTodoListHandler}
          />

          {/* TodoListComponent */}
          <TodoList
            todoList={todoList}
            deleteTodoListHandler={deleteTodoListHandler}
            changeTodoListHandler={changeTodoListHandler}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default TodoBox;
