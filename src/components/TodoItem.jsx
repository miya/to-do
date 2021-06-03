import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, InputGroup, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import db from '../utils/db';

const TodoItem = (props) => {
  const { todo, index, todoList, setTodoList } = props;

  const [editText, setEditText] = useState(todo.text);
  const [edit, setEdit] = useState(false);

  const deleteTodo = () => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    db.todoList.delete(todo.id);
  };

  const updateTodoDone = () => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1, { id: todo.id, text: todo.text, done: !todo.done });
    setTodoList(newTodoList);
    db.todoList.update(todo.id, { done: !todo.done });
  };

  const updateTodoText = () => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1, { id: todo.id, text: editText, done: todo.done });
    setTodoList(newTodoList);
    db.todoList.update(todo.id, { text: editText });
  };

  const inputEditTextHandler = (event) => {
    setEditText(event.target.value);
  };

  const onEditButtonPushed = () => {
    if (edit) {
      updateTodoText();
      setEdit(false);
    }
    else {
      setEdit(true);
    }
  };

  return (
    <ListGroup.Item variant={todo.done && 'success'}>
      <InputGroup className="align-items-center">
        <input
          id={index}
          className="mr-2"
          type="checkbox"
          checked={todo.done}
          onChange={() => updateTodoDone()}
        />

        {edit && (
          <FormControl
            className="mr-2"
            defaultValue={editText}
            onChange={(e) => { inputEditTextHandler(e) }}
          />
        )}

        {(todo.done && !edit) && (
          <strike>{todo.text}</strike>
        )}
        {(!todo.done && !edit) && (
          <>{todo.text}</>
        )}

        <div className="ml-auto">
          <OverlayTrigger placement="top" transition={false} overlay={<Tooltip id="Tooltip">Edit todo</Tooltip>} >
            {({ ref, ...triggerHandler }) => (
              <button ref={ref} {...triggerHandler} type="button" className="item-update-btn" onClick={() => onEditButtonPushed()}>
                <FontAwesomeIcon icon={faEdit} color="#cccccc" />
              </button>
            )}
          </OverlayTrigger>
          <OverlayTrigger placement="top" transition={false} overlay={<Tooltip id="Tooltip">Delete Todo</Tooltip>} >
            {({ ref, ...triggerHandler }) => (
              <button ref={ref} {...triggerHandler} type="button" className="item-update-btn" onClick={() => deleteTodo()}>
                <FontAwesomeIcon icon={faTrash} color="#cccccc" />
              </button>
            )}
          </OverlayTrigger>
        </div>
      </InputGroup>
    </ListGroup.Item>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  todoList: PropTypes.array,
  setTodoList: PropTypes.func,
};

export default TodoItem;
