import './Style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowRS = (props) => {
  const { data } = props;

  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <div style={{ width: '80vw' }} key={index}>
              <div className="card mb-3 bg-transparent">
                <div className="row g-0  layout-rs">
                  <div className="col-md-4">
                    <iframe
                      width="850"
                      height="480"
                      src={`https://www.youtube.com/embed/${item.id.videoId}`}
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
                    <div style={{ margin: 'auto' }}>
                      <div className="card-body  text-black" style={{ textAlign: 'left' }}>
                        <div className="card-title">
                          <Link to={`/youtube/${item.id.videoId}`} style={{textDecoration: 'none', color: 'black'}}>
                            {item.snippet.title}
                          </Link>
                        </div>
                        <hr />
                        <div className="card-text">
                          <Link to={`/youtube/${item.id.videoId}`}  style={{textDecoration: 'none', color: 'black'}}>
                            {item.snippet.description}
                          </Link>
                        </div>
                        <hr />
                        <div className="text-muted">{item.snippet.publishedAt}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default ShowRS;

ShowRS.propTypes = {
  data: PropTypes.array
};
