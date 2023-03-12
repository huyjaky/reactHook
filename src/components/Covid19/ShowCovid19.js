import useFetch from '../fetchData/fetchData';
import { SpinnerCircular, SpinnerCircularSplit } from 'spinners-react';
import './Style.scss';
import { Link } from 'react-router-dom';

const ShowCovid19 = (props) => {
  // https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true.
  const { data: dataCovid, isLoading } = useFetch(
    'https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true.'
  );

  if (isLoading) {
    return (
      <div>
        <SpinnerCircularSplit size="70%" />
      </div>
    );
  }

  return (
    <table className="table table-dark table-striped-columns">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">City</th>
          <th scope="col">Deaths</th>
          <th scope="col">Cases</th>
        </tr>
      </thead>
      <tbody>
        {dataCovid.locations &&
          dataCovid.locations.length > 0 &&
          dataCovid.locations.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">
                  <Link to={`/covid19/${item.name}`}>
                    <button type="button">{index}</button>
                  </Link>
                </th>
                <th scope="row">
                  <Link to={`/covid19/${item.name}`}>
                    <button type="button">{item.name}</button>
                  </Link>
                </th>
                <th scope="row">
                  <Link to={`/covid19/${item.name}`}>
                    <button type="button">{item.death}</button>
                  </Link>
                </th>
                <th scope="row">
                  <Link to={`/covid19/${item.name}`}>
                    <button type="button">{item.cases}</button>
                  </Link>
                </th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ShowCovid19;
