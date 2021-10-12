import React from 'react';
import useGeoLocation from '../hooks/useGeoLocation';
import Main from './Main';


const Home = () => {

    const {coord, endGeoLocation, error} = useGeoLocation();
    
    return (
        <>
        {endGeoLocation && 
            <div className="bg-third">
                
                <Main coord={coord} error={error} />
                
            </div>
        }            
        </>
    )
}

export default Home
