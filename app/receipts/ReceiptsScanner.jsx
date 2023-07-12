import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { createWorker } from 'tesseract.js';

import styles from './receiptsScanner.styles';

const ReceiptsScanner = ({ imageUri }) => {
  const [scannedText, setScannedText] = useState('');

  const processImage = async () => {
    try {
      const worker = createWorker({
        logger: (m) => console.log(m),
      });

      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');

      const { data } = await worker.recognize(imageUri);
      setScannedText(data.text);

      await worker.terminate();
    } catch (error) {
      console.error('Error processing image:', error);
    }
  };

  const handleProcessImage = async () => {
    try {
      await processImage();
    } catch (error) {
      console.error('Error processing image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.images} />
      <TouchableOpacity onPress={handleProcessImage}>
        <Text>Process Image</Text>
      </TouchableOpacity>
      <Text>{scannedText}</Text>
    </View>
  );
};

export default ReceiptsScanner;
