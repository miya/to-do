import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';

const TodoList = (props) => {
  const { todoList, changeTodoListHandler } = props;

  return (
    <>
      <Card>
        <ListGroup>
          {todoList.map((todo, index) => { return (
            <ListGroup.Item key={index} variant={ todo.done && 'success' }>
              <input id={index} type="checkbox" className="mr-2" onChange={changeTodoListHandler}></input>
              {todo.done && 
                <>
                  <strike>{todo.text}</strike>
                </>
              }
              {!todo.done && 
                <>
                  <>{todo.text}</>
                </>
              }
            </ListGroup.Item>
          ) })}
        </ListGroup>
      </Card>
    </>
  )
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  changeTodoListHandler: PropTypes.func,
}

export default TodoList;

