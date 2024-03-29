import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SpinnerCircularSplit } from 'spinners-react';
import useFetch from '../fetchData/fetchData';
import ModalBlog from './modal/ModalBlog';
import './Style.scss';

const Blog = () => {
  const [Posts, setPosts] = useState([]);

  const { data: fetchPost, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  useEffect(() => {
    setPosts(fetchPost);
  }, [fetchPost]);

  if (isLoading) {
    return (
      <div>
        <SpinnerCircularSplit size="70%" />
      </div>
    );
  }
  console.log('checkasdfasdf');

  const addBlog = (Blog) => {
    let posts = [...fetchPost];
    posts.unshift(Blog);
    setPosts(posts);
    toast.success('Done!');
  };

  return (
    <div className="root--panel">
      <h1>Post</h1>

      <ModalBlog addBlog={addBlog} />

      <div className="root--panel__item">
        {Posts.map((item, index) => {
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
