import React from 'react';

const Footer = () => {
    return (
        <footer className="h-8 bg-primary text-white text-xs w-full">
            
            <div className="text-center leading-8">
                <span>Weather info by </span>
                    <a 
                        href="https://openweathermap.org/" 
                        target="_blank" rel="noreferrer" 
                        className="hover:text-third"
                    >
                        OpenWeatherMap
                    </a>

                <span>  |  Created by </span>
                    <a 
                        href="https://dnlk.dev/" 
                        target="_blank" rel="noreferrer"
                        className="hover:text-third"
                    >
                        Dnlk
                    </a>                
            </div>
        </footer>
    )
}

export default Footer

