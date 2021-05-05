import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

const TodoCount = (props) => {
  const { todoList } = props;

  const [rate, setRate] = useState(0);

  useEffect(() => {
    const getCount = () => {
      const doneCount = todoList.filter((todo) => { return todo.done }).length;
      setRate(Math.round((doneCount / todoList.length) * 100))
    };
    getCount();
  }, [todoList]);

  return (
    <>
      <div className="mt-3">
        <ProgressBar variant="success" now={rate} label={`${rate}%`} />
      </div>
    </>
  );
};

TodoCount.propTypes = {
  todoList: PropTypes.array,
};

export default TodoCount;
