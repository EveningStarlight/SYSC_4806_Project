import { Box, VStack, Button } from '@chakra-ui/react';
import { Frame } from '../components/frame';
import { Link as RouteLink, useParams } from 'react-router-dom';
import { Responce } from '../components/responces/Responce';

function AnswerSurvey() {
    const { id } = useParams();

    let survey = {};
    if (id === 'test') {
        survey = getTestSurvey();
    } else {
        survey = getSurvey(id);
    }

    return (
        <Frame title={survey.title}>
            <form
                id="AnswerSurveyForm"
                onSubmit={() => answerSurveySubmit(survey)}
            >
                <VStack m={3}>
                    <Box>{survey.description}</Box>
                    {renderQuestions(survey.questions)}
                    <RouteLink to="/SurveyAnswered">
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
                </VStack>
            </form>
        </Frame>
    );
}

function renderQuestions(questions) {
    const list = [];
    for (const key in questions) {
        list.push(<Responce key={key} qKey={key} question={questions[key]} />);
    }
    return list;
}

function getSurvey(id) {
    return {};
}

function getTestSurvey() {
    return {
        title: 'Test Survey',
        description: 'The default test survey',
        questions: {
            'Q-1': {
                question: 'What is your name?',
                type: 'text',
            },
            'Q-2': {
                question: 'How many stars is Subway?',
                type: 'number',
                max: '3',
                min: '0',
            },
            'Q-3': {
                question: 'Favourite ice cream flavour?',
                type: 'choice',
                choices: {
                    'Q-3-Ch-1': {
                        choice: 'Vanilla',
                    },
                    'Q-3-Ch-2': {
                        choice: 'Chocolate',
                    },
                    'Q-3-Ch-3': {
                        choice: 'Mint',
                    },
                },
            },
        },
    };
}

export { AnswerSurvey };

function answerSurveySubmit(survey) {
    for (let i = 1; i < survey.numOfQs + 1; i++) {
        let answer = document.getElementById(i.toString);
        console.log(answer);
    }
}
