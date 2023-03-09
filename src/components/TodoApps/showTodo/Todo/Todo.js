import PropTypes from 'prop-types';

const Todo = (props) => {
  const [item, index] = [props.item, props.index];
  const handleDelete = (item) => {
    props.handleDelete(item);
  };

  const handleEditTodo = (item) => {
    props.handleEditTodo(item);
  };

  return (
    <>
      <div className="index">{index + 1}</div>
      <div className="content">
        <div className="content-primary">{item.content}</div>
      </div>
      <div className="listBtn">
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginRight: '20px' }}
          onClick={() => handleEditTodo(item)}
        >
          Edit
        </button>
        <button type="button" className="btn btn-primary" onClick={() => handleDelete(item)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Todo;

Todo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string
  }),
  index: PropTypes.number,
  handleDelete: PropTypes.func,
  handleEditTodo: PropTypes.func,
  handleOnChange: PropTypes.func
};
