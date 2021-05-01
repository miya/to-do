import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = (props) => {
  const { todoList, changeTodoListHandler } = props;

  return (
    <>
      <Card>
        <ListGroup>
          {todoList.map((todo, index) => { return (
            <ListGroup.Item key={index} variant={ todo.done && 'success' }>
              <div>
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
                <button className="delete-btn">
                  <FontAwesomeIcon icon={faTrash} color="#cccccc"/>
                </button>
              </div>
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

