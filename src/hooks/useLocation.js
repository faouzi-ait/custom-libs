import { useState, useEffect } from 'react';

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (err) => {
            setLocation((prevLocation) => ({
              ...prevLocation,
              error: err.message,
            }));
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      } else {
        setLocation((prevLocation) => ({
          ...prevLocation,
          error: 'Geolocation is not supported by this browser.',
        }));
      }
    };

    getLocation();

    return () => {
      navigator?.geolocation?.clearWatch(1);
    };
  }, []);

  return location;
};

export default useGeoLocation;
