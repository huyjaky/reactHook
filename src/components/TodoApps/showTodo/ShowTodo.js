import './Style.scss';
import PropTypes from 'prop-types';

const ShowTodo = (props) => {
  let listTodo = props.listTodo;

  const handleDelete = (todo) => {
    props.handleDelete(todo);
  }
  return (
    <div>
      {listTodo.length > 0 && listTodo.map((item, index) => {
        return (
          <div className="showTodo" key={index} style={{ marginBottom: '10px' }}>
            <div className="index">{index + 1}</div>
            <div className="content">
              <div className='content-primary'>
                {item.content}
              </div>
            </div>
            <div className="listBtn">
              <button type='button' className="btn btn-primary" style={{marginRight: '20px'}}>Edit</button>
              <button type='button' className="btn btn-primary" onClick={() => handleDelete(item)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ShowTodo;

ShowTodo.propTypes = {
  listTodo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string
    })
  ),
  handleDelete: PropTypes.func
}