import { useState, useEffect } from 'react';

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        coord: null,
        endGeoLocation: false,
        error: null
    });

    const onSuccess = (location) => {
        setLocation({
            endGeoLocation: true,
            coord: {
                lat: location.coords.latitude,
                lon: location.coords.longitude
            },
            error: null
        });
    }

    const onError = (error) => {
        setLocation({
            coord: { // if geolocation error or not supporting , by default Bruxelles
                lat: 50.850449,
                lon: 4.34878
            },
            endGeoLocation: true,
            error
        });
    }

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
        else {
            onError({
                code: 0,
                message: "Geolocation not supported"
            });
        }        
    }, [])


    return location;
}

export default useGeoLocation
