import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TodoCount = (props) => {
  const { todoList } = props;

  const [doneCount, setDoneCount] = useState(0);
  const [notDoneCount, setNotDoneCount] = useState(0);

  const getCount = () => {
    const doneCount = todoList.filter((todo) => { return todo.done }).length;
    const notDoneCount = todoList.length - doneCount;
    setDoneCount(doneCount);
    setNotDoneCount(notDoneCount);
  };

  useEffect(() => {
    getCount();
  }, [todoList]);

  return (
    <>
      <p>Done: {doneCount} NotDone: {notDoneCount}</p>
    </>
  );
};

TodoCount.propTypes = {
  todoList: PropTypes.array,
};

export default TodoCount;
