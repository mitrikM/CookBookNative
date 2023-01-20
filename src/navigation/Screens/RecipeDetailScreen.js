import AsyncStorage from '@react-native-async-storage/async-storage';
import {Box, Button, Container, Flex, Heading, HStack, Row, Stack, Text, View} from "native-base";
import {useEffect, useState} from "react";
import {LoadingSpinner} from "../../Components/LoadingSpinner";
import {api} from "../../API/api";
import moment from "moment";
import {FlatList} from "react-native";
import ListItem from "native-base/src/components/primitives/List/ListItem";

export const RecipeDetailScreen = ({route, navigation}) => {
    const {slug} = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [recipe, setRecipe] = useState(undefined);
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const [directions, setDirections] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [lastModifiedDate, setLastModifiedDate] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [servingCount, setServingCount] = useState('');
    const [error, setError] = useState('');
    const [sideDish, setSideDish] = useState('');
    const [isSaved, setIsSaved] = useState(false);


    // useEffect(() => {
    //     const getRecipeDetail = () => {
    //         setIsLoading(true);
    //         api.get(`recipes/${slug}`)
    //             .then((response) => (
    //                     setRecipe(response.data),
    //                         setTitle(response.data.title),
    //                         setId(response.data._id),
    //                         setDirections(response.data.directions),
    //                         setIngredients(response.data.ingredients),
    //                         setLastModifiedDate(response.data.lastModifiedDate),
    //                         setPreparationTime(response.data.preparationTime),
    //                         setServingCount(response.data.servingCount),
    //                         setSideDish(response.data.sideDish)
    //                 )
    //             )
    //             .catch((error) => setError(error))
    //             .finally(() => setIsLoading(false))
    //     }
    //     getRecipeDetail();
    // }, [slug])


    useEffect(() => {
        const getRecipeDetail = async () => {
            try {
                setIsLoading(true);
                const response = await api.get(`recipes/${slug}`);
                setRecipe(response.data);
                setTitle(response.data.title);
                setId(response.data._id);
                setDirections(response.data.directions);
                setIngredients(response.data.ingredients);
                setLastModifiedDate(response.data.lastModifiedDate);
                setPreparationTime(response.data.preparationTime);
                setServingCount(response.data.servingCount);
                setSideDish(response.data.sideDish);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        getRecipeDetail();
    }, [slug])

    // useEffect(()=>{
    //     //     const checkIfRecipeIsSaved = async () => {
    //     //         try {
    //     //             const recipeString = await AsyncStorage.getItem(id);
    //     //             if (recipeString) {
    //     //                 return true;
    //     //             } else {
    //     //                 return false;
    //     //             }
    //     //         } catch (e) {
    //     //             console.log(e)
    //     //         }
    //     //     }
    //     //     checkIfRecipeIsSaved().then(result => setIsSaved(result))
    //     // },[id])


    if (isLoading) {
        return <LoadingSpinner/>
    }
    if (error) {
        return <Text>{error}</Text>
    }
    const formatDate = (date) => {
        date = moment(date);
        return (date.format("DD-MM-YYYY"));
    }

    // const addToFavorites = async () => {
    //     try {
    //         await console.log('adding')
    //         await AsyncStorage.setItem(id, JSON.stringify(recipe));
    //         await setIsSaved(true);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    //
    // const removeFromFavorites = async () => {
    //     try {
    //         setIsSaved(false);
    //         await AsyncStorage.removeItem(id);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    //
    //
    // {isSaved ? (
    //     <Button size="sm" onPress={() => removeFromFavorites()}>
    //         Remove from Favorites
    //     </Button>
    // ) : (
    //     <Button size="sm" onPress={() => addToFavorites()}>
    //         Add To Favorites
    //     </Button>
    // )}


    return (
        <Box p={2}>
            <Heading color="emerald.500">{title}</Heading>

            <Text>počet porcií: {servingCount !== undefined ? servingCount : '0'}</Text>
            <Text>Príloha: {sideDish !== undefined ? sideDish : 'neuvedené'}</Text>
            <Text>Doba
                prípravy: {Math.floor(preparationTime / 60) === 0 ? "" : Math.floor(preparationTime / 60) + ' hod'} {preparationTime % 60 + ' min'}</Text>


            <Box>
                <Box>
                    <Heading>Popis</Heading>
                </Box>
                <Box>
                    <Text>
                        {directions}
                    </Text>
                </Box>
            </Box>

            <Heading>Ingrediencie</Heading>

            <FlatList data={ingredients} renderItem={({item}) => (
                <Text>{item.name} {item.amount} {item.amountUnit} </Text>
            )}
            />

        </Box>
    );
}