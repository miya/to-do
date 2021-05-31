import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = React.memo((props) => {
  const { todoList, deleteTodoListHandler, updateTodoListHandler } = props;

  return (
    <>
      <ListGroup className={todoList.length === 0 ? true : 'mt-3'}>
        {todoList.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              deleteTodoListHandler={deleteTodoListHandler}
              updateTodoListHandler={updateTodoListHandler}
            />
          );
        })}
      </ListGroup>
    </>
  );
});

TodoList.propTypes = {
  todoList: PropTypes.array,
  deleteTodoListHandler: PropTypes.func,
  changeTodoListHandler: PropTypes.func,
};

export default TodoList;
