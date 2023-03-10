
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      let res = await axios.get(url);
      let data = res.data.locations;
      console.log('count');
      setData(data);
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



  return {
    data, isLoading
  }
}

export default useFetch;