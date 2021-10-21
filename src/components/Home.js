import React from 'react';
import useGeoLocation from '../hooks/useGeoLocation';
import Loading from './Loading';
import Main from './Main';


const Home = () => {

    const {coord, endGeoLocation, city} = useGeoLocation();
    
    return (
        <>
        {endGeoLocation 
            ?
            <div className="bg-third">
                
                <Main coord={coord} city={city} />
                
            </div>
            :
            <Loading />
        }            
        </>
    )
}

export default Home
