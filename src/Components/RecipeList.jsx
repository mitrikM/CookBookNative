import {RecipeCard} from "./RecipeCard";
import * as React from "react";
import {Pressable, ScrollView} from "native-base";

export const RecipeList = ({recipes, navigation}) => {

    return (
        <ScrollView>
            {
                recipes.map(({_id, title, preparationTime, slug, sideDish}) => {
                    return (
                        <Pressable key={_id}
                                   onPress={
                            ()=>navigation.navigate('Details', {
                                slug:slug,
                            }
                            )}
                        >
                        <RecipeCard  title={title} slug={slug} preparationTime={preparationTime}
                                    sideDish={sideDish}/>
                        </Pressable>
                    )
                })
            }
        </ScrollView>
    )
}