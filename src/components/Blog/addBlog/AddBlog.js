import { useState } from 'react';
import PropTypes from 'prop-types';

const AddBlog = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { addBlog } = props;

  const addNewBlog = () => {
    addBlog({
      title: title,
      body: content
    });
  };

  return (
    <form>
      <div className="mb-3">
        <label
          htmlFor="formGroupExampleInput"
          className="form-label"
          style={{ textAlign: 'left', width: '100%' }}
        >
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="formGroupExampleInput2"
          className="form-label"
          style={{ textAlign: 'left', width: '100%' }}
        >
          Content
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
      </div>
      <div className="mb-3" style={{ width: '100%' }}>
        <button
          className="btn btn-primary"
          type="button"
          style={{ width: '100%' }}
          data-bs-dismiss="modal"
          onClick={() => addNewBlog()}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddBlog;

AddBlog.propTypes = {
  addBlog: PropTypes.func
};
