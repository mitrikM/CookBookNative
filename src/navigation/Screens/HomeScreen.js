import * as React from 'react';
import {SafeAreaView, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import {api} from "../../API/api";
import {RecipeList} from "../../Components/RecipeList";
import {LoadingSpinner} from "../../Components/LoadingSpinner";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Icon, Input, View} from "native-base";

export const HomeScreen = ({navigation}) => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        GetRecipes();
    }, [])

    const GetRecipes = () => {
        setIsLoading(true);
        api
            .get('/recipes')
            .then(response =>
                setRecipes(response.data))
            .catch(() => setError(error))
            .finally(() =>
                setIsLoading(false));
    }


    let filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchValue.toLowerCase()));


    return (
        <View>
            <Input placeholder="Hladaj" value={searchValue} onChangeText={(text)=>{setSearchValue(text)}} variant="filled" width="100%" borderRadius="10" py="1" px="2"
                   InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search"/>}/>}/>


            {isLoading && <LoadingSpinner/>}
            {error && <Text>error</Text>}
            <RecipeList navigation={navigation} recipes={filteredRecipes}/>
        </View>

    )
}