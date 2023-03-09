import './Style.scss';
import ShowTodo from './showTodo/ShowTodo';
import { useState } from 'react';

const FormTodo = () => {
  const [listTodo, setListTodo] = useState([]);

  const [todo, setTodo] = useState('');

  const handleChangeTodo = (todo) => {
    // console.log(item.content);
    let listTodo_ = listTodo.map((item) => {
      if (item.id == todo.id) {
        item.content = todo.content;
      }
      return item;
    });
    setListTodo(listTodo_);
  };

  const handleDelete = (todo_) => {
    let listTodo_ = listTodo.filter((item) => item.id !== todo_.id);
    // console.log(listTodo_);
    setListTodo(listTodo_);
  };

  const handleOnChange = (event) => {
    setTodo(event.target.value);
  };

  const handleOnclick = () => {
    let todo_ = { id: Math.floor(Math.random() * (100 - 10)) + 1, content: todo };
    setListTodo([...listTodo, todo_]);
  };

  return (
    <form className="formTodo" style={{ height: '100%' }}>
      <div className="mb-3 formTodo-form_inp">
        <input
          onChange={(event) => handleOnChange(event)}
          value={todo}
          type="text"
          className="htmlForm-control inp"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          style={{ borderRadius: '20px' }}
        />
      </div>
      <div className="formTodo-form_btn">
        <button type="button" className="btn btn-primary" onClick={() => handleOnclick()}>
          Submit
        </button>
      </div>
      <hr />
      <ShowTodo
        listTodo={listTodo}
        handleDelete={handleDelete}
        handleChangeTodo={handleChangeTodo}
      />
    </form>
  );
};

export default FormTodo;
