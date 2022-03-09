import {
    VStack,
    Box,
    Button,
    Input,
    Flex,
    FormControl,
    FormLabel,
    Spacer,
    Stack,
    Textarea,
} from '@chakra-ui/react';
import { Frame } from '../frame';
import { Link as RouteLink } from 'react-router-dom';

function NewSurvey() {
    return (
        <Frame title="Create a New Survey">
            <form id="CreateSurveyForm" action="php/CreateSurveyAction.php">
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    minH="450px"
                >
                    <Box>
                        <FormControl>
                            <FormLabel htmlFor="surveyTitle">
                                Title of Survey:
                            </FormLabel>

                            <Input
                                type="text"
                                id="surveyTitle"
                                placeholder="Enter your Survey Title"
                                mb={2}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="desc"> Description </FormLabel>

                            <Textarea
                                id="desc"
                                placeholder="Enter the survey Description"
                                mb={2}
                            ></Textarea>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="q1"> Question 1: </FormLabel>

                            <Input
                                type="text"
                                id="q1"
                                placeholder="Enter your the 1st question"
                                mb={2}
                            />
                        </FormControl>
                    </Box>

                    <Stack direction="row" justifyContent="space-between">
                        <Button id="resetButton" type="reset" value="reset">
                            Reset
                        </Button>

                        <Button type="submit" value="submit">
                            Create Survey
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Frame>
    );
}

export { NewSurvey };
