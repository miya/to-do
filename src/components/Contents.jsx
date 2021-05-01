import {React, useState} from 'react';
import { Card } from 'react-bootstrap';
import AddTodo from './AddTodo'

const Contents = () => {
  const [todo, setTodo] = useState('');

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
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Contents;