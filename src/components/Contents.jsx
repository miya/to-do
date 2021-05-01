import {React, useState} from 'react';
import { Card } from 'react-bootstrap';
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Contents = () => {
  const [todo, setTodo] = useState('');

  const [todoList, setTodoList] = useState([
    {text: "reactチュートリアル", done: true},
    {text: "筋トレ", done: false},
    {text: "useState", done: true},
    {text: "バイト", done: true}
  ]);

  const inputTodoHandler = (event) => {
    setTodo(event.target.value);
  };

  return (
    <>
      <Card className="mx-3 mt-3">
        <Card.Body>

          {/* AddTodoComponent */}
        　<AddTodo 
            todo={todo}
            inputTodoHandler={inputTodoHandler} 
          />

          {/* TodoListComponent */}
          <TodoList 
            todoList={todoList}
          />
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Contents;