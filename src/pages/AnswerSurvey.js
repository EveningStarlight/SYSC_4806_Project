import { Box, VStack, Input, Button } from '@chakra-ui/react';
import { Frame } from '../components/frame';
import { Link as RouteLink } from 'react-router-dom';

var survey = require('../database/data.json');

function AnswerSurvey() {
    return (
        <Frame title={survey.title}>
            <form id="AnswerSurveyForm" onSubmit={answerSurveySubmit}>
                <VStack m={3}>
                    <Box>{survey.description}</Box>
                    <Box id="1">
                        {survey.Q1}
                        <Input type="text" placeholder={survey.Q1} mb={2} />

                        <RouteLink to="/">
                            <VStack direction="row" justifyContent="end" mt={4}>
                                <Button
                                    ml="auto"
                                    type="submit"
                                    value="submit"
                                    colorScheme="purple"
                                >
                                    Submit
                                </Button>
                            </VStack>
                        </RouteLink>
                    </Box>
                </VStack>
            </form>
        </Frame>
    );
}

export { AnswerSurvey };

function answerSurveySubmit() {
    for (let i = 1; i < survey.numOfQs + 1; i++) {
        let answer = document.getElementById(i.toString);
        console.log(answer);
    }
}
