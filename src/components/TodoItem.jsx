import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = (props) => {
  const { todo, index, deleteTodoListHandler, changeTodoListHandler } = props;

  return (
    <>
      <ListGroup.Item variant={todo.done && 'success'}>
        <div>

          {/* checkbox */}
          <input id={index} type="checkbox" className="mr-2" checked={todo.done} onChange={changeTodoListHandler}></input>

          {/* todo */}
          {todo.done &&
            <strike>{todo.text}</strike>
          }
          {!todo.done &&
            <>{todo.text}</>
          }

          {/* delete button */}
          <button type="button" className="delete-btn" onClick={e => deleteTodoListHandler(e, index)}>
            <FontAwesomeIcon icon={faTrash} color="#cccccc" />
          </button>

        </div>
      </ListGroup.Item>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  deleteTodoListHandler: PropTypes.func,
  changeTodoListHandler: PropTypes.func,
};

export default TodoItem;
