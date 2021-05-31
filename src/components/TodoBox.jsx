import { React, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import db from '../utils/db';

const TodoBox = () => {
  const [todoList, setTodoList] = useState([]);

  const initTodoList = async() => {
    const todoList = await db.todoList.toArray();
    setTodoList(todoList);
  };

  useEffect(() => {
    initTodoList();
  }, []);

  return (
    <Card className="mx-3 mt-3">
      <Card.Body>
        <TodoForm
          todoList={todoList}
          setTodoList={setTodoList}
        />

        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
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
