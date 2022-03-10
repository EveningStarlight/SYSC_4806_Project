import { Box, VStack, Input, Button} from '@chakra-ui/react';
import { Frame } from '../frame';

function Survey() {
    var survey = require('../surveys.json');

    return (
        <Frame title={survey.title}>
            <VStack m={3}>
                <Box>{survey.description}</Box>
                <Box>
                    {survey.Q1}
                    <Input type="text" placeholder={survey.Q1} mb={2} />

                    <Button type="submit" value="submit">
                            Answer Survey
                    </Button>
                </Box>
            </VStack>
        </Frame>
    );
}

export { Survey };
