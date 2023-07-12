import { useState, useEffect, useRef } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'

import styles from './cameraScreen.styles'

const CameraScreen = ({ onCapture }) => {
    const [hasPermissions, setHasPermissions] = useState(null)
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermissions(status === 'granted')
        })();
    }, [])

    const takePicture = async () => {
        if (cameraRef.current) {
          const options = { quality: 0.5, base64: true };
          const data = await cameraRef.current.takePictureAsync(options);
          onCapture(data.uri);
        }
    };

    if (hasPermissions === null ) {
        return <View />
    }

    if (hasPermissions === false) {
        return <Text>No access to camera</Text>
    }

  return (
    <View style={styles.container}>
        <Camera ref={cameraRef} style={styles.camera} />

        <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text>Capture</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CameraScreen