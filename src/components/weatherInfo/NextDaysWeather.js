import React from 'react';
import DailyWeather from './DailyWeather';

const NextDaysWeather = ({data}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mt-8 w-full">

            {data.slice(1).map(day => (
                <DailyWeather day={day} key={day.dt}/>                
            ))}
   
        </div>
    )
}

export default NextDaysWeather
