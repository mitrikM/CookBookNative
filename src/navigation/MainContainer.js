import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// Screens

import {HomeScreen} from "./Screens/HomeScreen";
import {FavouritesScreen} from "./Screens/FavouritesScreen";

// Screen Names
const HomeName = 'Recipes';
const FavoritesName = 'Favorites';

const Tab = createBottomTabNavigator();
export const MainContainer = () => {


    return (
            <Tab.Navigator
                initialRouteName={HomeName}
                screenOptions={({route}) => ({
                    "tabBarActiveTintColor": "tomato",
                    "tabBarInactiveTintColor": "grey",
                    "tabBarLabelStyle": {
                        "paddingBottom": 10,
                        "fontSize": 10
                    },
                    "tabBarStyle": [
                        {
                            "display": "flex"
                        },
                        null
                    ],

                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === HomeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        }
                         else if (rn === FavoritesName) {
                            iconName = focused ? 'star' : 'star-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },

                })}
            >
                <Tab.Screen name={HomeName} component={HomeScreen}/>
                <Tab.Screen name={FavoritesName} component={FavouritesScreen}/>
            </Tab.Navigator>
    )
}



