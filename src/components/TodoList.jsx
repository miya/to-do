import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todoList, deleteTodoListHandler, changeTodoListHandler } = props;

  return (
    <>
      {todoList.length !== 0 && (
        <Card className="mt-3">
          <ListGroup className="flex-column-reverse">
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
        </Card>
      )}
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  deleteTodoListHandler: PropTypes.func,
  changeTodoListHandler: PropTypes.func,
};

export default TodoList;
