import ShowRS from './showRS/ShowRS';
import './Style.scss';

const Youtube = () => {
  return (
    <>
      <form>
        <label htmlFor="Search" className="form-label">
          Search Bar
        </label>
        <div className="mb-3 form-search">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <button type="submit" className="btn btn-light" style={{ borderRadius: '20px' }}>
            Submit
          </button>
        </div>
      </form>
      <ShowRS />
    </>
  );
};

export default Youtube;
