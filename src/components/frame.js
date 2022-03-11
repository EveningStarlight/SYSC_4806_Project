import { Box, Heading, Center } from '@chakra-ui/react';

function Frame({ title, ...props }) {
    return (
        <>
            <Center p="20px">
                <Heading>{title}</Heading>
            </Center>
            <Center alignItems="center" pb={10}>
                <Box
                    bg="white"
                    w="550px"
                    p="25px"
                    minH="500px"
                    boxShadow="dark-lg"
                    rounded="md"
                    {...props}
                />
            </Center>
        </>
    );
}

export { Frame };
