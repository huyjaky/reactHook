import AddBlog from '../addBlog/AddBlog';
import PropTypes from 'prop-types';

const ModalBlog = (props) => {
  const {addBlog} = props;

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal modal-dark fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <AddBlog addBlog={addBlog}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBlog;

ModalBlog.propTypes = {
  addBlog: PropTypes.func
}