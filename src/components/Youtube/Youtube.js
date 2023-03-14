import axios from 'axios';

import { useEffect, useState } from 'react';
import ShowRS from './showRS/ShowRS';
import './Style.scss';

const Youtube = () => {

  const [search, setSearch] = useState('');
  const [data, setData] = useState();


  const handleYoutubeRs = async () => {
    let res = await axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/search',
      "params": {
        'part': 'snippet',
        'maxResults': '50',
        'key': 'AIzaSyCHk1sW7naiONdzG0h2iH99W2ivIr529K4',
        'q': search
      }
    });
    setData(res.data.items);
  }

  useEffect(() => {
    console.log(data);
  } , [data])

  return (
    <>
      <form>
        <label htmlFor="Search" className="form-label">
          Search Bar
        </label>
        <div className="mb-3 form-search" style={{ width: '30vw' }}>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="button" className="btn btn-primary" style={{ borderRadius: '20px' }} onClick={() => handleYoutubeRs()}>
            Submit
          </button>
        </div>
      </form>
      <ShowRS data={data}/>
    </>
  );
};

export default Youtube;
