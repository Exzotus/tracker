import { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Stack } from 'expo-router';

import { COLORS, icons } from "../constants";
import styles from './index.style';
import { ScreenHeaderBtn } from "../components"
import Home from './home/home'
import Mileage from "./mileage/mileage"
import Receipts from "./receipts/receipts"
import Reviews from "./reviews/reviews"

const sidebarOptions = ["Home", "Mileage", "Receipts", "Reviews"]

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState(sidebarOptions[0]);

    const handleBurgerMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const displayPage = () => {
        switch (activePage) {
            case Home: 
                return (
                    <Home />
                );

            case Mileage:
                return ( 
                    <Mileage />
                );

            case Receipts:
                return (
                    <Receipts />
                );

            case Reviews:
                return (
                    <Reviews />
                )
            default:
                return null;
        }
    };

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

            <View style={styles.mainContainer}>
                {displayPage()}
            </View>

        </SafeAreaView>
    )
}

export default Home