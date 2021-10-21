import { useState, useEffect } from 'react'

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        coord: null,
        endGeoLocation: false,
        error: null,
        city: null
    });

    const onSuccess = async (location) => {              

        const reverseGeocoding = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&localityLanguage=en`);

        const response = await reverseGeocoding.json();                 

        setLocation({
            endGeoLocation: true,
            coord: {
                lat: location.coords.latitude,
                lon: location.coords.longitude
            },
            error: null,
            city: response.locality
        });
    }

    const onError = (error) => {
        setLocation({
            coord: { // if geolocation error or not supporting , by default Bruxelles
                lat: 50.850449,
                lon: 4.34878
            },
            endGeoLocation: true,
            error,
            city: "Bruxelles"
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
