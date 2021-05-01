import {React, useState} from 'react';
import { Card } from 'react-bootstrap';
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Contents = () => {
  const defaultTodoList = [
    {text: "reactチュートリアル", done: false},
    {text: "筋トレ", done: false},
    {text: "useState", done: false},
    {text: "バイト", done: false}
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
            changeTodoListHandler={changeTodoListHandler}
          />
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Contents;