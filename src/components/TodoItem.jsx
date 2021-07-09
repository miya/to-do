import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, InputGroup, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import DB from '../utils/db';

const TodoItem = (props) => {
  const { todo, index, todoList, setTodoList } = props;

  const [editTodoText, setEditTodoText] = useState(todo.text);
  const [edit, setEdit] = useState(false);

  const newTodoList = [...todoList];

  const deleteTodo = () => {
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    const db = new DB('todoList');
    db.delete(todo.id);
  };

  const updateTodo = (key, value) => {
    const newTodo = newTodoList.find(newTodo => newTodo.id === todo.id);
    newTodo[key] = value;
    newTodoList.splice(index, 1, newTodo);
    setTodoList(newTodoList);
    const db = new DB('todoList');
    db.update(todo.id, key, value);
  };

  const inputEditTodoTextHandler = (event) => {
    setEditTodoText(event.target.value);
  };

  const onEditButtonPushed = () => {
    if (edit) {
      updateTodo('text', editTodoText);
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
          onChange={() => updateTodo('done', !todo.done)}
        />

        {edit && (
          <FormControl
            className="mr-2"
            defaultValue={editTodoText}
            onChange={(e) => { inputEditTodoTextHandler(e) }}
          />
        )}

        {(todo.done && !edit) && (
          <strike>{todo.text}</strike>
        )}
        {(!todo.done && !edit) && (
          <>{todo.text}</>
        )}

        <div className="ml-auto">
          <OverlayTrigger placement="top" transition={false} overlay={<Tooltip id="Tooltip">Edit Todo</Tooltip>}>
            {({ ref, ...triggerHandler }) => (
              <button ref={ref} {...triggerHandler} type="button" className="item-update-btn" onClick={() => onEditButtonPushed()}>
                <FontAwesomeIcon icon={faEdit} color="#cccccc" />
              </button>
            )}
          </OverlayTrigger>
          <OverlayTrigger placement="top" transition={false} overlay={<Tooltip id="Tooltip">Delete Todo</Tooltip>}>
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
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default TodoItem;
