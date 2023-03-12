import { Link } from 'react-router-dom';
import { SpinnerCircularSplit } from 'spinners-react';
import useFetch from '../fetchData/fetchData';
import ModalBlog from './modal/ModalBlog';
import './Style.scss';

const Blog = () => {
  const { data: post, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (isLoading) {
    return (
      <div>
        <SpinnerCircularSplit size="70%" />
      </div>
    );
  }
  console.log('check');

  return (
    <div className="root--panel">
      <h1>Post</h1>

      <ModalBlog />

      <div className="root--panel__item">
        {post.map((item, index) => {
          return (
            <div className="card-class card text-bg-dark mb-3" key={index}>
              <h5 className="card-header" style={{ margin: '10px' }}>
                Featured
              </h5>
              <div className="card-post card-body">
                <div className="title card-title">{item.title}</div>
                <div className="body">{item.body}</div>
                <Link to={`/blog/${item.id}`} className="card-class__btn">
                  <button type="button" className="btn-detail btn btn-primary">
                    Detail
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
