import { useState } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'

import styles from './receipts.styles'
import CameraScreen from './CameraScreen'
import ReceiptsScanner from './ReceiptsScanner'

const receipts = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImageUri, setCapturedImageUri] = useState(null);

  const handleCameraPress = () => {
    setShowCamera(true);
  };

  const handleCapture = (uri) => {
    setCapturedImageUri(uri);
    setShowCamera(false);
  }

  if (showCamera) {
    return <CameraScreen onCapture={handleCapture} />
  }
    
  return (
    <View>
      <View style={styles.buttonContainer}>
         <TouchableOpacity style={[styles.button, styles.buttonLeft]} onPress={handleCameraPress}>
          <Text style={styles.buttonText}>Camera</Text>
         </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonRight]}>
            <Text style={styles.buttonText}>Libary</Text>
          </TouchableOpacity>
      </View>

      <ReceiptsScanner imageUri={capturedImageUri} />
    </View>
  )
}

export default receipts