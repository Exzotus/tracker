import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from "./screenHeader.style"

const ScreenHeaderBtn = ({ iconUrl, dimension, handleClick }) => {
  return (
    <TouchableOpacity 
      style={styles.btnContainer}
      onPress={handleClick}
    >
        <Image 
            source={iconUrl}
            resizeMode='cover'
            style={styles.btnImg(dimension)}
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn