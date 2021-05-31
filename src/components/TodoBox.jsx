import { React, useState, useEffect, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import db from '../utils/db';

const TodoBox = () => {
  const [todo, setTodo] = useState('');

  const [todoList, setTodoList] = useState([]);

  const initTodoList = async() => {
    const todoList = await db.todoList.toArray();
    if (todoList.length === 0) {
      const defaultTodoList = [];
      for (let i = 0; i < 3; i++) {
        const defaultTodo = {
          id: uuidv4(),
          text: `task-${i + 1}`,
          done: false,
        };
        defaultTodoList.push(defaultTodo);
      }
      setTodoList(defaultTodoList);
    }
    else {
      setTodoList(todoList);
    }
  };

  const inputTodoHandler = useCallback((event) => {
    setTodo(event.target.value);
  }, [setTodo]);

  const addTodoListHandler = useCallback(async() => {
    const newTodoList = [...todoList];
    const newTodo = {
      id: uuidv4(),
      text: todo,
      done: false,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    setTodo('');
    await db.todoList.add(newTodo);
  }, [todo, todoList]);

  const deleteTodoListHandler = useCallback((id, index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    db.todoList.delete(id);
  }, [todoList]);

  const updateTodoListHandler = useCallback((id, index) => {
    const newTodoList = [...todoList];
    const text = newTodoList[index].text;
    const done = !newTodoList[index].done;
    newTodoList.splice(index, 1, { id, text, done });
    setTodoList(newTodoList);
    db.todoList.update(id, { done });
  }, [todoList]);

  useEffect(() => {
    initTodoList();
  }, []);

  return (
    <Card className="mx-3 mt-3">
      <Card.Body>
        <TodoForm
          todo={todo}
          inputTodoHandler={inputTodoHandler}
          addTodoListHandler={addTodoListHandler}
        />

        <TodoList
          todoList={todoList}
          deleteTodoListHandler={deleteTodoListHandler}
          updateTodoListHandler={updateTodoListHandler}
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
  );
};

export default TodoBox;
