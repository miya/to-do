import { React, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// eslint-disable-next-line no-unused-vars
import TodoProgressBar from './TodoProgressBar';

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
    if (!localItem) {
      setTodoList(defaultTodoList);
    }
    else {
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
    newTodoList.push({
      text: todo,
      done: false,
    });
    setTodoList(newTodoList);
    setTodo('');
    updateLocalStorage(newTodoList);
  };

  const deleteTodoListHandler = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    updateLocalStorage(newTodoList);
  };

  const changeTodoListHandler = (index) => {
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

          {todoList.length === 0 && (
            <div className="mt-3 text-center">
              <small className="text-secondary">There is no todo.</small>
            </div>
          )}

          {todoList.length - todoList.filter((todo) => { return todo.done }).length === 0 && (
            <div className="mt-3 text-center">
              <small className="text-secondary">There are no unfinished todo&apos;s.</small>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default TodoBox;
