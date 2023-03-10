import useFetch from "../fetchDataCovid/fetchData";
import { SpinnerCircular, SpinnerCircularSplit } from 'spinners-react';


const ShowCovid19 = (props) => {

  // https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true.
  const { data: dataCovid, isLoading } = useFetch('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true.');

  if (isLoading) {
    return <div>
      <SpinnerCircularSplit size="70%" />
    </div>;
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
        {dataCovid && dataCovid.length > 0 &&
          dataCovid.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.death}</td>
                <td>{item.cases}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ShowCovid19;
