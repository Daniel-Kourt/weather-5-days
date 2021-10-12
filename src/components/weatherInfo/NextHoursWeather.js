import React from 'react';
import moment from 'moment';

const NextHoursWeather = ({data}) => {
    return (
        <div className="w-full md:w-2/3 bg-third px-2 py-4 shadow-box">

            <p className="title pb-3 text-center">
                Next 24 hours
            </p>
            
            <div className="flex justify-between items-center h-full">
                
                {data.slice(0,24).map((hour, idx) => (
                    
                    [2,5,8,11,14,17,20,23].includes(idx) 
                    ? (

                        <article 
                            key={hour.dt} 
                            className="h-full flex flex-col space-y-2 text-center"
                        >
                            <p className="font-semibold text-xs">
                                {(moment.unix(hour.dt).format('H') + ":00")}
                            </p>

                            <img 
                                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} 
                                alt={hour.weather[0].main}
                                className="w-full"
                            />   

                            <p className="text-sm font-semibold">
                                {Math.round(hour.temp)}&#176;
                            </p>

                            <p className="text-xs pt-1">
                                {hour.humidity}%
                            </p>                        

                        </article>

                    )
                    : null
                    
                ))}

            </div>
            
        </div>
    )
}

export default NextHoursWeather
