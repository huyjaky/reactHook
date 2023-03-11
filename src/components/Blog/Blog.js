import axios from 'axios';
import { useEffect, useState } from 'react';
import { SpinnerCircularSplit } from 'spinners-react';
import useFetch from '../fetchData/fetchData';
import './Style.scss';

const Blog = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = res.data;
      console.log('count');
      setPost(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <SpinnerCircularSplit size="70%" />
      </div>
    );
  }

  return (
    <div className="root--panel">
      <div className="root--panel__item">
        {post.map((item, index) => {
          return (
            <div className="card text-bg-dark mb-3" key={index}>
              <h5 className="card-header">Featured</h5>
              <div className="card-post card-body">
                <h5 className="title card-title">{item.title}</h5>
                <div className='body'>

                  {/* <p className="card-text">{item.body}</p> */}
                  {item.body}
                </div>
                <div >
                  <button>check</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
