import { StyleSheet, View } from 'react-native'
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Location = () => {
  const route = useRoute();
  const { coordinates } = route.params || {};

  const currentLocation = {
    latitude: 30.6682,
    longitude: 73.1114,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    title: "My Location"
  }

  const [destination, setDestination] = useState(null);

  useEffect(() => {
    if (coordinates) {
      setDestination(coordinates);
    }
  }, [coordinates]);

  return (
    <View style={styles.Container}>
      <MapView style={styles.Map} initialRegion={currentLocation}>
      {destination ? (
          <>
            <Marker coordinate={currentLocation} title={currentLocation.title} />
            <Marker coordinate={destination} title={destination.title} />
            <MapViewDirections
              origin={currentLocation}
              destination={destination}
              // apikey={YOUR_GOOGLE_MAPS_API_KEY} // Replace with your Google Maps API key
              strokeWidth={3}
              strokeColor="blue"
            />
          </>
        ) : (
          <Marker coordinate={currentLocation} title={currentLocation.title} />
        )}
      </MapView>
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Map: {
    ...StyleSheet.absoluteFillObject,
  },
})