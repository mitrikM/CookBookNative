import {Heading, HStack, Spinner} from "native-base";

export const LoadingSpinner = () => {
    return (
        <HStack space={8} justifyContent="center" alignItems="center">
            <Spinner accessibilityLabel="Loading posts"/>
            <Heading color="primary.500" fontSize="md">
                Loading
            </Heading>
        </HStack>
    )
}