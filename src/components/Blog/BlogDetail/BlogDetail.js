import { useNavigate, useParams } from 'react-router-dom';
import { SpinnerCircularSplit } from 'spinners-react';
import useFetch from '../../fetchData/fetchData';

const blogDetail = () => {
  const { id } = useParams();
  const { data: postDetail, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${id}`
  );

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/blog');
  };

  if (isLoading) {
    return (
      <div>
        <SpinnerCircularSplit size="70%" />
      </div>
    );
  }

  return (
    <div>
      {postDetail.length > 0 &&
        postDetail.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.title}</div>
              <hr style={{ width: '50%', margin: 'auto', borderWidth: '5px' }} />
              {item.body}
            </div>
          );
        })}
      <div>
        <button type="button" className="btn btn-primary" onClick={() => handleOnClick()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default blogDetail;
