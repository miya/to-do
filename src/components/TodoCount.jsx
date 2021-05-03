import { React, useState } from 'react';
import PropTypes from 'prop-types';

const TodoCount = (props) => {
  const { todoList } = props;

  const doneCount = useState(0);
  const notDoneCount = useState(0);

  return (
    <>
      <p>TodoCountComponent</p>
    </>
  );
};

TodoCount.propTypes = {
  todoList: PropTypes.array,
};

export default TodoCount;
