import { Box, VStack, Button } from '@chakra-ui/react';
import { Frame } from '../components/frame';
import { Link as RouteLink } from 'react-router-dom';
function SurveyCreated() {
    return (
        <Frame title="Thank You!">
            <Box m={3}>Thank You for creating a survey!</Box>
            <Box m={3}>Your survey has been saved.</Box>

            <VStack m={3}>
                <RouteLink to="/createSurvey">
                    <Button m={3} colorScheme="purple">
                        Create Another Survey
                    </Button>
                </RouteLink>
                <RouteLink to="/">
                    <Button m={3} colorScheme="purple">
                        Return to Survey Page
                    </Button>
                </RouteLink>
            </VStack>
        </Frame>
    );
}

export { SurveyCreated };
