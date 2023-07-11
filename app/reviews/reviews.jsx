import React from 'react'
import { Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import businessData from './business.json'

const reviews = () => {
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
        >
          {businessData.map((business) => (
            <Marker 
              key={business.id}
              coordinate={{
                latitude: business.latitude,
                longitude: business.longitude,
              }}
            />
          ))}
        </MapView>
    </View>
  )
}

export default reviews