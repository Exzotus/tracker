import { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import styles from './reviews.styles'
import businessData from './business.json'
import { icons } from '../../constants'

const reviews = () => {
  const [currentZoomLevel, setCurrentZoomLevel] = useState(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleRegionChange = (region) => {
    const zoomLevel = calculateZoomLevel(region);
    setCurrentZoomLevel(zoomLevel);
  };

  const calculateZoomLevel = (region) => {
    const latDelta = region.latitudeDelta;
    const lngDelta = region.longitudeDelta;
  
    const WORLD_DIM = { width: 256, height: 256 };
    const ZOOM_MAX = 20;
  
    const latZoomLevel = Math.round(Math.log2(WORLD_DIM.height / latDelta));
    const lngZoomLevel = Math.round(Math.log2(WORLD_DIM.width / lngDelta));
  
    return Math.min(latZoomLevel, lngZoomLevel, ZOOM_MAX);
  };

  const handleMarkerPress = (business) => {
    setSelectedBusiness(business)
  }

  return (
    <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 44.9642885,
            longitude: -93.2533122,
            latitudeDelta: 0.9,
            longitudeDelta: 0.0421,
          }}
          showsPointsOfInterest={false}
          showsBuildings={false}
          onRegionChangeComplete={handleRegionChange}
        >
          {businessData.map((business) => {
            const MinZoomLevel = 14;
            const MaxZoomLevel = 20;

            const isVisible = currentZoomLevel >= MinZoomLevel && currentZoomLevel <= MaxZoomLevel;

            return isVisible ? (
              <Marker 
                key={business.id}
                coordinate={{
                  latitude: business.latitude,
                  longitude: business.longitude,
                }}
                onPress={() => handleMarkerPress(business)}
              >
                <Image 
                  source={icons.Marker}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </Marker>
            ): null; 
          })}
        </MapView>

        {selectedBusiness && (
          <View style={styles.popupContainer}>
            <Text>{selectedBusiness.name}</Text>
            <Text>{selectedBusiness.description}</Text>
            <TouchableOpacity style={styles.closeButton}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
  )
}

export default reviews