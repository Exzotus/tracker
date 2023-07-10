import { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Stack } from 'expo-router';

import { COLORS, icons } from "../constants";
import styles from './index.style';
import { ScreenHeaderBtn } from "../components"

const sidebarOptions = ["Home", "Mileage", "Receipts", "Reviews"]

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleBurgerMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <SafeAreaView>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.dgrey },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.burgerMenu} dimension="60%" handleClick={handleBurgerMenuClick} />
                    ),
                    headerTitle: ""
                }}
            />
            
            {isSidebarOpen && (
                <View style={styles.sidebarContainer}>
                    <FlatList 
                        data={sidebarOptions}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <Text style={styles.sidebarText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}

        </SafeAreaView>
    )
}

export default Home