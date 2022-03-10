import { Box, VStack, Input, Button} from '@chakra-ui/react';
import { Frame } from '../frame';

var survey = require('../surveys.json');

function Survey() {

    return (
        <Frame title={survey.title}>
            <form id="AnswerSurveyForm" onSubmit={answerSurveySubmit}>
                <VStack m={3}>
                    <Box>{survey.description}</Box>
                    <Box id="1">
                        {survey.Q1}
                        <Input type="text" placeholder={survey.Q1} mb={2} />

                        <RouteLink to="/">
                            <Button type="submit" value="submit">
                                    Answer Survey
                            </Button>
                        </RouteLink>
                    </Box>
                </VStack>
            </form>
        </Frame>
    );
}

export { Survey };

function answerSurveySubmit(){
    for (let i=1; i < survey.numOfQs + 1; i++){
        let answer = document.getElementById(i.toString);
        console.log(answer);
    } 
}
