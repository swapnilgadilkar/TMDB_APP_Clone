import Geolocation, {
  GeolocationResponse,
  GeolocationError,
  GeolocationOptions,
} from '@react-native-community/geolocation';

class GeoLocationService {
  private static instance: GeoLocationService | null = null;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): GeoLocationService {
    if (!GeoLocationService.instance) {
      GeoLocationService.instance = new GeoLocationService();
    }
    return GeoLocationService.instance;
  }

  public getCurrentLocation(
    successCallback: (position: GeolocationResponse) => void,
    errorCallback: (error: GeolocationError) => void,
    options: GeolocationOptions = {},
  ): void {
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => {
        successCallback(position);
      },
      (error: GeolocationError) => {
        errorCallback(error);
      },
      options,
    );
  }

  public watchLocation(
    successCallback: (position: GeolocationResponse) => void,
    errorCallback: (error: GeolocationError) => void,
    options: GeolocationOptions = {},
  ): number {
    return Geolocation.watchPosition(
      (position: GeolocationResponse) => {
        successCallback(position);
      },
      (error: GeolocationError) => {
        errorCallback(error);
      },
      options,
    );
  }

  public clearWatch(watchId: number): void {
    if (watchId !== null) {
      Geolocation.clearWatch(watchId);
    }
  }

  public stopObserving(): void {
    Geolocation.stopObserving();
  }
}

export default GeoLocationService;

//USAGE

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import GeoLocationService from './GeoLocationService'; // Adjust the import path based on the file location
// import { GeolocationResponse, GeolocationError } from '@react-native-community/geolocation';

// const LocationComponent: React.FC = () => {
//   const [location, setLocation] = useState<GeolocationResponse | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const geoService = GeoLocationService.getInstance();
//     geoService.getCurrentLocation(
//       (position: GeolocationResponse) => {
//         setLocation(position);
//         setError(null);
//       },
//       (error: GeolocationError) => {
//         setError(error.message);
//       }
//     );
//   }, []);

//   return (
//     <View style={styles.container}>
//       {location ? (
//         <Text style={styles.text}>
//           Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
//         </Text>
//       ) : (
//         <Text style={styles.text}>Fetching Location...</Text>
//       )}
//       {error && <Text style={styles.errorText}>Error: {error}</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 16,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//   },
// });

// export default LocationComponent;
