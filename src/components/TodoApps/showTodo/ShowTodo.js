import './Style.scss';
import PropTypes from 'prop-types';

const ShowTodo = (props) => {
  let listTodo = props.listTodo;
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
              <button className="btn btn-primary">btn</button>
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
  )
}