import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles from './Tabs.style'
import { SIZES } from '../../../constants';

function TabButton({ name }) {
    return (
        <TouchableOpacity style={styles.btn}>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}

const Tabs = ({ tabs }) => {
  return (
    <View style={styles.container}>
        <FlatList 
            data={tabs}
            horizontal
            renderItem={({ item }) => (
                <TabButton 
                    name={item}
                />
            )}
            contentContainerStyle={{ columnGap: SIZES.small }}
            keyExtractor={(item) => item}
        />
    </View>
  )
}

export default Tabs