import React, { useState } from 'react';
import WeatherInfo from './weatherInfo/WeatherInfo';
import SelectCity from './SelectCity';
import { cities } from '../data/cityList';
import MainCities from './MainCities';


const Main = ({coord, city}) => {

    const [location, setLocation] = useState(coord);
    const [cityName, setCityName] = useState(city);
    
    
    const handleSelect = (e) => {
        if (e.target.value === "start") {
            setLocation(coord);
            setCityName(city);            
            return;
        }        
        
        const selectedCity = cities.filter((city) => {
            return city.id.toString() === e.target.value;
        });
        
        setLocation(selectedCity[0].coord);
        setCityName(selectedCity[0].name);      
        
    }

    // const selectMainCity = (id) => {
    //     const selectedCity = cities.filter((city) => {
    //         return city.id === id;
    //     });

    //     setLocation(selectedCity[0].coord);
    //     setCityName(selectedCity[0].name); 
    // }


    return (
        <div className="main max-w-screen-lg mx-auto bg-third">

            <SelectCity handleSelect={handleSelect} />

            <WeatherInfo lat={location.lat} lon={location.lon} city={cityName}/>

            <MainCities />          
            
        </div>
    )
}

export default Main