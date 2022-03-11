import { VStack, Box, Button } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

import { Frame } from '../components/frame';

function Home() {
    return (
        <Frame title="Survey Gorilla">
            <Box>The goto place for all your survey needs</Box>
            <VStack m={3}>
                <RouteLink to="/createSurvey">
                    <Button m={3} colorScheme="purple">
                        New Survey
                    </Button>
                </RouteLink>
                <RouteLink to="/survey">
                    <Button m={3} colorScheme="purple">
                        Complete Survey
                    </Button>
                </RouteLink>
            </VStack>
        </Frame>
    );
}

export { Home };
