import { useParams } from 'react-router-dom';

const Detail = () => {
  const { city } = useParams();
  console.log(city);

  return (
    <div>
      {city}
      Welcome to City Detail!
    </div>
  );
};

export default Detail;
