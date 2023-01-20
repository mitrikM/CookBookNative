import {StyleSheet, Text, View} from 'react-native';
import {MainContainer} from './src/navigation/MainContainer';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipeDetailScreen} from './src/navigation/Screens/RecipeDetailScreen';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from './src/navigation/Screens/SplashScreen';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{headerShown: false}}
                        name="Splash"
                        component={SplashScreen}
                    />
                    <Stack.Screen
                        name={'MainContainer'}
                        component={MainContainer}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen name={'Details'} component={RecipeDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}