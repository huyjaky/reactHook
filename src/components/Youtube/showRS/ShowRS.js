import './Style.scss';
// import PropTypes from 'prop-types';

const ShowRS = (props) => {

  // const { data } = props;

  return (
    <>
      {/* {data && */}
        <div style={{ width: '80vw' }}>
          <div className="card mb-3 bg-transparent">
            <div className="row g-0  layout-rs">
              <div className="col-md-4">
                <iframe
                  width="850"
                  height="480"
                  // src="https://www.youtube.com/embed/YbmvFEXZG7Q?list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E"
                  src="https://www.youtube.com/embed/KnsjOS95LLM"
                  title="#30.2 Design Giao Diện &amp; Hoàn Thiện Chức Năng &#39;Search Youtube&#39; với Google APIs và React Hook"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div
                className="col-md-8"
                style={{ backgroundColor: 'white', borderRadius: '20px', marginLeft: '20px' }}
              >
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* } */}
    </>
  );
};

export default ShowRS;

// ShowRS.propTypes = {
//   data: PropTypes.array
// }