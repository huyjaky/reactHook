import './Style.scss';
import PropTypes from 'prop-types';

const ShowTodo = (props) => {
  let listTodo = props.listTodo;
  return (
    <div className="showTodo">
      {listTodo.map((item, index) => {
        return (
          <>
            <div className="index">{index}</div>
            <div className="content">
              <div className='content-primary'>
                {item.content}
              </div>
            </div>
            <div className="listBtn">
              <button className="btn btn-primary">btn</button>
            </div>
          </>
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