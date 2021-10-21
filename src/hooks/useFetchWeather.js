import { useState, useEffect } from 'react'

const useFetchWeather = (lat, lon) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  const fetchData = async () => {

    try {

      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_OWM}&units=metric&exclude=minutely`);
      const data = await response.json();
      setData(data);
      
    }
    catch (err) {
      setError(err);
    }
    finally {
      setIsPending(false);
    }
  }

  useEffect(() => {
    fetchData();    
  }, [lat, lon]);

  return { data, isPending, error };
};

export default useFetchWeather;
