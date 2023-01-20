import {AspectRatio, Box, Heading, HStack, Image, Stack, Text} from "native-base";
import PlaceholderImage from "../images/food-placeholder.png"

export const RecipeCard = ({slug, title, preparationTime, sideDish}) => {


    return (

            <Box alignItems="center">
                <Box maxW="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <AspectRatio w="100%">
                            <Image source={PlaceholderImage} alt="image"/>
                        </AspectRatio>

                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                {title}
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "violet.500"
                            }} _dark={{
                                color: "violet.400"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                                {sideDish ? sideDish : ''}
                            </Text>
                        </Stack>

                        <HStack alignItems="center" justifyContent="space-between">
                            <HStack alignItems="center">
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    {preparationTime / 60 !== null || preparationTime / 60 !== 0 ? Math.floor(preparationTime / 60) + ' Hod' : ''} {preparationTime % 60 !== null ? preparationTime % 60 + ' min' : ''}
                                </Text>
                            </HStack>
                        </HStack>
                    </Stack>
                </Box>
            </Box>
    )
};