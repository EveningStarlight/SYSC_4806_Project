import { Box, VStack, Button } from '@chakra-ui/react';
import { Frame } from '../components/frame';
import { Link as RouteLink } from 'react-router-dom';
function SurveyAnswered() {
    return (
        <Frame title="Thank You!">
            <Box m={3}>Thank You for filling out the survey!</Box>
            <Box m={3}>Your reponse has been saved.</Box>

            <VStack m={3}>
                <RouteLink to="/survey">
                    <Button m={3} colorScheme="purple">
                        Submit Another Response
                    </Button>
                </RouteLink>
                <RouteLink to="/">
                    <Button m={3} colorScheme="purple">
                        Answer A Different Survey
                    </Button>
                </RouteLink>
            </VStack>
        </Frame>
    );
}

export { SurveyAnswered };
