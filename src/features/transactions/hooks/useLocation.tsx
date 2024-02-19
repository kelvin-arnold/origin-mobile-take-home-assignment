import Geolocation from 'react-native-geolocation-service';
import {useEffect, useState} from 'react';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

export const useLocation = (): LocationState => {
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    const requestPermissionsAndGetData = async () => {
      const granted = await Geolocation.requestAuthorization('whenInUse');
      if (granted === 'granted') {
        Geolocation.getCurrentPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        setLocation({
          latitude: null,
          longitude: null,
          error: 'Location permission denied',
        });
      }
    };

    requestPermissionsAndGetData();
  }, []);

  return location;
};
