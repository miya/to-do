import { React, useState, useEffect, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoBox = () => {
  const [todo, setTodo] = useState('');

  const [todoList, setTodoList] = useState([]);

  const initTodoList = () => {
    const localItem = JSON.parse(localStorage.getItem('todoList'));
    if (!localItem) {
      // eslint-disable-next-line no-param-reassign
      const defaultTodoList = [...Array(4).keys()].map((i) => { return { id: uuidv4(), text: `task-${++i}`, done: false } });
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

  const inputTodoHandler = useCallback((event) => {
    setTodo(event.target.value);
  }, [setTodo]);

  const addTodoListHandler = useCallback(() => {
    const newTodoList = [...todoList];
    newTodoList.push({
      id: uuidv4(),
      text: todo,
      done: false,
    });
    setTodoList(newTodoList);
    setTodo('');
    updateLocalStorage(newTodoList);
  }, [todo, todoList]);

  const deleteTodoListHandler = useCallback((index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    updateLocalStorage(newTodoList);
  }, [todoList]);

  const changeTodoListHandler = useCallback((index) => {
    const newTodoList = [...todoList];
    const id = newTodoList[index].id;
    const text = newTodoList[index].text;
    const done = !newTodoList[index].done;
    newTodoList.splice(index, 1, { id, text, done });
    setTodoList(newTodoList);
    updateLocalStorage(newTodoList);
  }, [todoList]);

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

          {todoList.length > 0 && todoList.filter((todo) => { return !todo.done }).length === 0 && (
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
