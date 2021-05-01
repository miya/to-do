import {React, useState} from 'react';
import { Card } from 'react-bootstrap';
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Contents = () => {
  const defaultTodoList = [
    {text: "task-1", done: false},
    {text: "task-2", done: false},
    {text: "task-3", done: false},
    {text: "task-4", done: false}
  ];

  const [todo, setTodo] = useState('');

  const [todoList, setTodoList] = useState(defaultTodoList);

  const inputTodoHandler = (event) => {
    setTodo(event.target.value);
  };

  const addTodoListHandler = () => {
    setTodoList([...todoList, {
      text: todo,
      done: false,
    }])
    setTodo('');
  };

  const deleteTodoHandler = (event, index) => {
    event.preventDefault();
    console.log(index)
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const changeTodoListHandler = (event) => {
    const index = event.target.id;
    const newTodoList = [...todoList];
    const text = newTodoList[index]['text'];
    const done = newTodoList[index]['done'];
    newTodoList.splice(index, 1, {text: text, done: !done});
    setTodoList(newTodoList);
  };

  return (
    <>
      <Card className="mx-3 mt-3">
        <Card.Body>

          {/* AddTodoComponent */}
        　<AddTodo 
            todo={todo}
            inputTodoHandler={inputTodoHandler} 
            addTodoListHandler={addTodoListHandler}
          />

          {/* TodoListComponent */}
          <TodoList 
            todoList={todoList}
            deleteTodoHandler={deleteTodoHandler}
            changeTodoListHandler={changeTodoListHandler}
          />
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Contents;