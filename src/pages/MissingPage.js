import { VStack, Box, Button } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

import { Frame } from '../components/frame';

function MissingPage() {
    return (
        <Frame title="Survey Gorilla">
            <Box fontSize="lg">
                The page you were looking for could not be found.
            </Box>
            <VStack m={3}>
                <RouteLink to="/">
                    <Button m={3}>Return Home</Button>
                </RouteLink>
            </VStack>
        </Frame>
    );
}

export { MissingPage };
