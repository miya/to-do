import React from 'react';
import { Card } from 'react-bootstrap';
import AddTodo from './AddTodo'

const Contents = () => {
  return (
    <>
      <Card className="mx-3 mt-3">
        <Card.Body>

        <AddTodo />
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Contents;