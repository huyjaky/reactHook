import PropTypes from 'prop-types';

const EditTodo = (props) => {
  const [item, index] = [props.item, props.index];

  const handleDelete = (item) => {
    props.handleDelete(item);
  };

  const handleOffEdit = () => {
    props.handleOffEdit();
  };

  const handleOnChange = (event) => {
    props.handleOnChange(event.target.value);
  };

  return (
    <>
      <div className="index">{index + 1}</div>
      <div className="content">
        <input
          onChange={(event) => handleOnChange(event)}
          type="text"
          className="htmlForm-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          style={{ borderRadius: '20px', marginRight: '10px' }}
          value={props.editTodo.content}
        />
      </div>
      <div className="listBtn">
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginRight: '20px' }}
          onClick={() => handleOffEdit()}
        >
          Enter
        </button>
        <button type="button" className="btn btn-primary" onClick={() => handleDelete(item)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default EditTodo;

EditTodo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string
  }),
  index: PropTypes.number,
  handleDelete: PropTypes.func,
  handleOffEdit: PropTypes.func,
  handleOnChange: PropTypes.func,
  editTodo: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string
  })
};
