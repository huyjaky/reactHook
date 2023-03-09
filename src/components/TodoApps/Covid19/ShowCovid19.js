import axios from "axios";
import { useState, useEffect } from "react";
import { SpinnerCircular, SpinnerCircularSplit } from 'spinners-react';


const ShowCovid19 = (props) => {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      let res = await axios.get('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true.');
      let data = res.data.locations;
      setDataCovid(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  if (isLoading) {
    return <div>
      <SpinnerCircularSplit size="70%"/>
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
        { dataCovid.length > 0 &&
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
