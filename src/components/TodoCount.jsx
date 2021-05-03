import { React } from 'react';
import PropTypes from 'prop-types';

const TodoCount = (props) => {
  const { todoList } = props;
  console.log(todoList);
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
