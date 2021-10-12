import useFetchWeather from '../../hooks/useFetchWeather'
import CurrentWeather from './CurrentWeather'
import NextDaysWeather from './NextDaysWeather'
import NextHoursWeather from './NextHoursWeather'

const WeatherInfo = ({lat,lon,city}) => {

    const { data, isPending } = useFetchWeather(lat,lon);

    document.title = "Weather7Days | " + city;
    

    return (
        <div className="w-full mx-auto px-4 xs:px-12 sm:px-16 md:px-4 max-w-screen-lg text-primary pb-8">

            { isPending && 
                <div className="mt-8">
                    <p className="text-center text-xl text-primary">
                        Loading ...
                    </p>
                </div>
            }
            { data && (
                <>                
                    <div className="flex w-full flex-col md:flex-row">
                        <CurrentWeather data={data.current} city={city}/>
                        <NextHoursWeather data={data.hourly} />
                    </div>

                    <div className="flex justify-center items-center pt-8 pb-4">
                        <h3 className="title">Next 7 Days</h3>  
                    </div>

                    <NextDaysWeather data={data.daily} />               
                </>
            )}
            
        </div>
    )
}

export default WeatherInfo
