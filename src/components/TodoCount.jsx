import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

const TodoCount = (props) => {
  const { todoList } = props;

  const [doneCount, setDoneCount] = useState(0);
  const [notDoneCount, setNotDoneCount] = useState(0);

  useEffect(() => {
    const getCount = () => {
      const doneCount = todoList.filter((todo) => { return todo.done }).length;
      const notDoneCount = todoList.length - doneCount;
      setDoneCount(doneCount);
      setNotDoneCount(notDoneCount);
    };
    getCount();
  }, [todoList]);

  return (
    <>
      <div className="text-center mt-3">
        <Badge className="mr-2" variant="success">done:{doneCount}</Badge>
        <Badge variant="danger">not done:{notDoneCount}</Badge>
      </div>
    </>
  );
};

TodoCount.propTypes = {
  todoList: PropTypes.array,
};

export default TodoCount;
