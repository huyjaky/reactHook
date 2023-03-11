import { useEffect, useState } from 'react';
import './Style.scss';

const CountDownview = () => {
  const [count, setCount] = useState(0);
  const [clock, setClock] = useState(false);
  const [countClone, setCountClone] = useState(0);

  const handleOnChange = (event) => {
    setCountClone(event.target.value);
  };

  const handleOnClick = (time) => {
    setCount(time);
    setClock(!clock);
  };

  const CountClone = () => {
    let countClone = count;
    return countClone;
  };

  useEffect(() => {
    if (count === 0) {
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <form className="formTodo" style={{ height: '100%' }}>
      <div className="mb-3 formTodo-form_inp">
        <input
          onChange={(event) => handleOnChange(event)}
          value={countClone}
          type="number"
          className="htmlForm-control inp"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          style={{ borderRadius: '20px' }}
        />
      </div>
      {clock == false ? (
        <div className="formTodo-form_btn">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleOnClick(countClone)}
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <div style={{ fontSize: '100px' }}>{count}</div>
          <div className="formTodo-form_btn" style={{ marginTop: '10px' }}>
            <button type="button" className="btn btn-primary" onClick={() => handleOnClick(0)}>
              Back
            </button>
          </div>
        </div>
      )}
      <hr />
    </form>
  );
};

export default CountDownview;
