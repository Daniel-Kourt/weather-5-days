import React, { useState } from 'react';
import WeatherInfo from './weatherInfo/WeatherInfo';
import SelectCity from './SelectCity';
import { cities } from '../data/cityList';
import MainCities from './MainCities';


const Main = ({coord}) => {

    const [location, setLocation] = useState(coord);
    const [cityName, setCityName] = useState("Bruxelles");
    
    
    const handleSelect = (e) => {
        if (e.target.value === "start") {
            setLocation(coord);
            setCityName("Bruxelles");            
            return;
        }        
        
        const selectedCity = cities.filter((city) => {
            return city.id.toString() === e.target.value;
        });
        
        setLocation(selectedCity[0].coord);
        setCityName(selectedCity[0].name);      
        
    }

    const selectMainCity = (id) => {
        const selectedCity = cities.filter((city) => {
            return city.id === id;
        });

        setLocation(selectedCity[0].coord);
        setCityName(selectedCity[0].name); 
    }


    return (
        <div className="main max-w-screen-lg mx-auto">

            <SelectCity handleSelect={handleSelect} />

            <WeatherInfo lat={location.lat} lon={location.lon} city={cityName}/>

            <MainCities select={selectMainCity} />          
            
        </div>
    )
}

export default Main