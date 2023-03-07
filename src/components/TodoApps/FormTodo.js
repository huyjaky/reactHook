import './Style.scss';
import ShowTodo from './showTodo/ShowTodo';
import { useState } from 'react';

const FormTodo = () => {
  const [listTodo, setListTodo] = useState([
    {
      id: 1,
      content: "check"
    }
  ]);

  const [todo, setTodo] = useState('');

  const handleOnChange = (event) => {
    setTodo(event.target.value);
  }

  const handleOnclick = () => {
    let todo_ = {id: Math.floor(Math.random() * (100 - 10)) + 1, content: todo};
    setListTodo([...listTodo, todo_]);
  }

  return (
    <form className='formTodo'>
      <div className="mb-3 formTodo-form_inp">
        <input onChange={(event) => handleOnChange(event)} value={todo} type="text" className="htmlForm-control inp" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderRadius: '20px'}} />
      </div>
      <div className="formTodo-form_btn">
        <button type="button" className="btn btn-primary" onClick={() => handleOnclick()}>Submit</button>
      </div>
      <hr />
      <ShowTodo  listTodo={listTodo}/>
    </form>
  )
}

export default FormTodo;