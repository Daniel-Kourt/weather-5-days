import useFetchWeather from '../hooks/useFetchWeather'

const MainCity = ({city}) => {

    // fetch the temp data for this city
    const { data } = useFetchWeather(city.lat,city.lon);
    
    return (
        <>
                
        { data && (            
            
            <div 
                className="rounded-lg shadow-xl border-primary border-2 text-primary overflow-hidden"
                //onClick={}            
            >
                {/* photo of the city */}
                <div className="h-4/5 overflow-hidden">
                    <img 
                    src={city.photo} 
                    alt={city.name} 
                    className="w-full h-auto opacity-60 object-fill" 
                    />
                </div>

                <div className="flex items-center justify-between px-4 md:px-2 h-1/5 text-sm">
                    {/* name of the city */}
                    <h5 className="font-semibold">
                        {city.name}
                    </h5>

                    {/* current temperature and weather icon */}
                    <div className="flex items-center justify-end">
                        <span className="pr-2">
                            {Math.round(data.current.temp)}&#176;
                        </span>
                        <img 
                            src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
                            alt={data.current.weather[0].main}
                            className="h-10"
                        />
                    </div>
                    

                </div>
        </div>
        
        
        )}
        </>
        
    )
}

export default MainCity
