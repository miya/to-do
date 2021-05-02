import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todoList, deleteTodoListHandler, changeTodoListHandler } = props;

  return (
    <>
      <Card>
        <ListGroup>
          {todoList.map((todo, index) => { return (
            <TodoItem 
              key={index}
              todo={todo}
              index={index}
              deleteTodoListHandler={deleteTodoListHandler}
              changeTodoListHandler={changeTodoListHandler}
            />
          )})}
        </ListGroup>
      </Card>
    </>
  )
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  deleteTodoListHandler: PropTypes.func,
  changeTodoListHandler: PropTypes.func,
}

export default TodoList;

