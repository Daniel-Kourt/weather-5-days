import { useState,useEffect } from 'react';

const useFetchWeather = (lat,lon) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    // error handling TO DO 

    useEffect(() => {

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_OWM}&units=metric&exclude=minutely`)
        .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setData(data);
            console.log(data);
            //setError(null);
          });
            
    }, [lat,lon]);

    return {data, isPending};
}

export default useFetchWeather
