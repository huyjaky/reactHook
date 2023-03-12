import { useParams } from "react-router-dom";
import { SpinnerCircularSplit } from 'spinners-react';
import useFetch from "../../fetchData/fetchData";

const blogDetail = () => {

  const { id } = useParams();
  const { data: postDetail, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);

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
              <div>
                {item.title}
              </div>
              {item.body}
            </div>
          )
        })
      }
    </div>
  )
}

export default blogDetail;
