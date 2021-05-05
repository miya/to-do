import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todoList, deleteTodoListHandler, changeTodoListHandler } = props;

  return (
    <>
      <ListGroup className={todoList.length === 0 ? true : 'mt-3'}>
        {todoList.map((todo, index) => {
          return (
            <TodoItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              todo={todo}
              index={index}
              deleteTodoListHandler={deleteTodoListHandler}
              changeTodoListHandler={changeTodoListHandler}
            />
          );
        })}
      </ListGroup>
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  deleteTodoListHandler: PropTypes.func,
  changeTodoListHandler: PropTypes.func,
};

export default TodoList;
