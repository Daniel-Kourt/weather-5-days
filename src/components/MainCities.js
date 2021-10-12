import { Anvers, Bruxelles, Liege, Ostend } from '../photos'
import MainCity from './MainCity'

const cities = [
    {
        id: 2800866,
        name: "Bruxelles",
        photo: Bruxelles,
        lon: 4.34878,
        lat: 50.850449
    },
    {
        id: 2803138,
        name: "Antwerpen",
        photo: Anvers,
        lon: 4.40346,
        lat: 51.219891
    },
    {
        id: 2792413,
        name: "Liège",
        photo: Liege,
        lon: 5.56749,
        lat: 50.633732
    },
    {
        id: 2789786,
        name: "Ostend",
        photo: Ostend,
        lon: 2.91185,
        lat: 51.223389
    },
]

const MainCities = () => {
    return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 py-8 px-4 xs:px-12 sm:px-16 md:px-4">

            {cities.map(city => (

                <MainCity city={city} key={city.id} />

            ))}

            
            
            
        </div>
    )
}

export default MainCities
