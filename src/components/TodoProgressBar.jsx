import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

const TodoProgressBar = (props) => {
  const { todoList } = props;

  const [rate, setRate] = useState(0);

  const getRate = () => {
    const doneCount = todoList.filter((todo) => { return todo.done }).length;
    setRate(Math.round((doneCount / todoList.length) * 100));
  };

  useEffect(() => {
    getRate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoList]);

  return (
    <>
      <div className="mt-3">
        <ProgressBar variant="success" now={rate} label={`${rate}%`} />
      </div>
    </>
  );
};

TodoProgressBar.propTypes = {
  todoList: PropTypes.array,
};

export default TodoProgressBar;