import React from 'react';
import { cities } from '../data/cityList';

const SelectCity = ({handleSelect}) => {
    return (
        <>
            <div className="w-full flex items-center justify-between p-8">
                
                <div className="pr-6 md:pr-12">
                    <h2 className="text-primary text-xl font-semibold mb-3">
                        Weather in Belgium
                    </h2>
                    <p className="text-sm">
                        24-hours and 7-days weather forecast for the main cities in Belgium 
                    </p>

                </div>
                

                <select 
                    onChange={handleSelect} 
                    className="rounded-md p-2 bg-primary text-white focus:outline-none"
                >
                    <option value="start">Select a city</option>

                    {cities.map(city => (
                        <option 
                            key={city.id}
                            value={city.id}
                        >
                            {city.name}
                        </option>
                    ))}

                </select>
            </div>
            
        </>
    )
}

export default SelectCity
