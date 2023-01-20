import * as React from 'react';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoadingSpinner} from "../../Components/LoadingSpinner";
import {RecipeList} from "../../Components/RecipeList";

export const FavouritesScreen = ({ navigation }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const keys = await AsyncStorage.getAllKeys();
                const filteredKeys = keys.filter(
                    key => key !== 'EXPO_CONSTANTS_INSTALLATION_ID'
                );
                const favoriteRecipes = await AsyncStorage.multiGet(filteredKeys);
                setFavorites(
                    favoriteRecipes.map(([_, value]) => JSON.parse(value))
                );
            } catch (error) {
                console.log(error);
            }
        };
        getFavorites();
    }, [favorites]);

    if (!favorites) {
        return <LoadingSpinner/>;
    }

    return (
        <RecipeList recipes={favorites} navigation={navigation}/>
    );
};