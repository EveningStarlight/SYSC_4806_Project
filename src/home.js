import { VStack, Box, Button } from '@chakra-ui/react';
import { Frame } from './frame';
import { Link as RouteLink } from 'react-router-dom';

function Home() {
    return (
        <Frame title="Survey Gorilla">
            <Box>The goto place for all your survey needs</Box>
            <VStack m={3}>
                <RouteLink to="/createSurvey">
                    <Button m={3}>New Survey</Button>
                </RouteLink>
                <RouteLink to="/survey">
                    <Button m={3}>Complete Survey</Button>
                </RouteLink>
				<RouteLink to="/userPage">
                    <Button m={3}>See your surveys</Button>
                </RouteLink>
            </VStack>
        </Frame>
    );
}

export { Home };
