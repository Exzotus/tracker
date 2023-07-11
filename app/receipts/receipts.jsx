import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'

import styles from './receipts.styles'

const receipts = () => {
  return (
    <View>
      <View style={styles.buttonContainer}>
         <TouchableOpacity style={[styles.button, styles.buttonLeft]}>
          <Text style={styles.buttonText}>Camera</Text>
         </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonRight]}>
            <Text style={styles.buttonText}>Libary</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default receipts