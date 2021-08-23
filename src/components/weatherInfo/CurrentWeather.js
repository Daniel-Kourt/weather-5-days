import React from 'react';
import moment from 'moment';

const makeFirstLetterCapital = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

const CurrentWeather = ({ data,city }) => {
    return (
        <div className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-8 bg-third rounded-md shadow-lg p-4">
            
            <div className="flex flex-col justify-around h-full">

                {/* ---- City name & Date ---- */}
                <div>
                    <h3 className="text-sm font-semibold text-blue-900">
                        {city}
                    </h3>
                    <p className="text-sm font-semibold text-blue-900">
                        {moment.unix(data.dt).format('D MMM YYYY , H:mm')}
                    </p>
                </div>
                
                

                <div className="flex items-center pt-2 md:px-2 lg:px-4">
                
                    <div className="w-2/3 flex md:flex-col justify-around">
                            <div>
                                <p className="text-4xl font-bold">
                                    {Math.round(data.temp)}&#176; C
                                </p>
                                <p className="text-sm mt-1 mb-2">
                                    Real feel: {Math.round(data.feels_like)}&#176; C
                                </p>
                                <p className="text-sm md:hidden italic text-blue-900">
                                    { makeFirstLetterCapital(data.weather[0].description) }
                                </p>
                            </div>

                            <div className="pt-2 flex flex-col justify-center space-y-2">
                                <span className="text-xs">
                                    Humidity: {data.humidity}%
                                </span>
                                <span className="text-xs">
                                    Wind: {Math.round(data.wind_speed)} km/h
                                </span>
                                <span className="text-xs">
                                    Cloudiness: {Math.round(data.clouds)}%
                                </span>
                            </div>
                                    
                    </div>

                    <div className="w-1/3">
                    
                            <img 
                                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                alt={data.weather[0].main}
                                className="mx-auto" 
                            />

                            <p className="hidden md:block text-center text-sm italic text-blue-900">
                                { makeFirstLetterCapital(data.weather[0].description) }
                            </p>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CurrentWeather
