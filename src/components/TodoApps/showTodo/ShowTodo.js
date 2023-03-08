import './Style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Todo from './Todo/Todo';
import EditTodo from './Todo/EditTodo';

const ShowTodo = (props) => {
  const [editConfig, setEditConfig] = useState(false);
  const [editTodo, setEditTodo] = useState({});

  let listTodo = props.listTodo;
  const handleOnChange = (item) => {
    setEditTodo({
      id: editTodo.id,
      content: item
    });
  }

  const handleOffEdit = () => {
    setEditConfig(false);
    props.handleChangeTodo(editTodo);
  }

  const handleEditTodo = (item) => {
    setEditConfig(true);
    setEditTodo(item);
  };

  const handleDelete = (todo) => {
    props.handleDelete(todo);
  };
  return (
    <div>
      {listTodo.length > 0 &&
        listTodo.map((item, index) => {
          return (
            <div className="showTodo" key={index} style={{ marginBottom: '10px' }}>
              {editConfig === true ?
                item.id === editTodo.id ?
                  <EditTodo item={item} index={index}
                    handleDelete={handleDelete}
                    handleOffEdit={handleOffEdit}
                    editTodo={editTodo}
                    handleOnChange={handleOnChange}
                  />
                  :
                  <Todo item={item} index={index}
                    handleDelete={handleDelete}
                    handleEditTodo={handleEditTodo}
                  />
                :
                <Todo item={item} index={index}
                  handleDelete={handleDelete}
                  handleEditTodo={handleEditTodo}
                />
              }
            </div>
          );
        })}
    </div>
  );
};

export default ShowTodo;

ShowTodo.propTypes = {
  listTodo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string
    })
  ),
  handleDelete: PropTypes.func,
  handleEditTodo: PropTypes.func,
  handleChangeTodo: PropTypes.func
};
