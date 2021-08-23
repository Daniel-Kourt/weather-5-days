import React from 'react';
import moment from 'moment';


const ModalDaily = ({ modalToggle, day }) => {
    return (       

            <div className="flex flex-col justify-between items-center h-full py-6 bg-blue-100 text-primary relative">

                {/* ----- Closing icon ----- */}
                <div className="absolute top-4 right-4 cursor-pointer" onClick={modalToggle}>
                    <span className="text-3xl font-bold">&times;</span>
                </div>


                {/* ----- Date ----- */}
                <p className="text-xl font-semibold">
                    {moment.unix(day.dt).format('dddd DD/MM/YYYY')}
                </p>


                {/* ----- Weather Image & Min-Max temperatures ----- */}
                <div className="rounded-md shadow-md p-4 w-4/5 text-center bg-third">
                    
                    <img 
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                        alt={day.weather[0].main}
                        className="h-28 mx-auto" 
                    />

                    <p className="text-3xl font-semibold">
                        <span className="pr-8 opacity-60">
                            {Math.round(day.temp.min)}&#176;
                        </span>
                        <span>
                            {Math.round(day.temp.max)}&#176;
                        </span>
                    </p>
                </div>
                

                {/* ----- 4 daily temperatures ----- */}
                <div className="flex w-4/5 px-4 py-2 justify-between rounded-md shadow-md text-sm bg-third">
                    
                    <div className="text-center">
                        <p className="font-semibold">Morning</p>
                        <p>{Math.round(day.temp.morn)}&#176;</p>
                    </div>

                    <div className="text-center">
                        <p className="font-semibold">Day</p>
                        <p>{Math.round(day.temp.day)}&#176;</p>
                    </div>

                    <div className="text-center">
                        <p className="font-semibold">Evening</p>
                        <p>{Math.round(day.temp.eve)}&#176;</p>
                    </div>

                    <div className="text-center">
                        <p className="font-semibold">Night</p>
                        <p>{Math.round(day.temp.night)}&#176;</p>
                    </div>

                </div>


                {/* ----- Humidity - Wind ----- */}
                <div className="flex w-4/5 py-2 justify-evenly rounded-md shadow-md text-sm bg-third">
                    <p>
                        <span className="font-semibold">Humidity: </span>
                        {day.humidity}%
                    </p> 
                    <p>
                        <span className="font-semibold">Wind: </span>
                        {Math.round(day.wind_speed)} km/h
                    </p>
                </div>
                         

                {/* ----- Sunrise - Sunset ----- */}
                <div className="flex w-4/5 py-2 justify-evenly rounded-md shadow-md text-sm bg-third">
                    <p>
                        <span className="font-semibold">Sunrise: </span>
                        {moment.unix(day.sunrise).format('HH:MM')}
                    </p>
                    <p>
                        <span className="font-semibold">Sunset: </span>
                        {moment.unix(day.sunset).format('HH:MM')}
                    </p>
                </div>

            </div>            
        
    )
}

export default ModalDaily
