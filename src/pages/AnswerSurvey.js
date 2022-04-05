import { Box, Center, VStack, Button } from '@chakra-ui/react';
import { Frame } from '../components/frame';
import { Link as RouteLink, useParams } from 'react-router-dom';
import { Responce } from '../components/responces/Responce';
import axios from 'axios';
import { useState, useEffect } from 'react';
import survey from '../models/survey';
var database = require('../database/data.json');

function AnswerSurvey() {
    const { id } = useParams();
    const [survey, setSurvey] = useState(null);
    useEffect(() => {
        getSurvey(id).then((data) => {
            setSurvey(data);
        });
    }, []);

    return !survey ? (
        <Frame>
            <Center fontWeight="bold" fontSize="xl">
                There was no survey found with the id: {id}
            </Center>
        </Frame>
    ) : (
        <Frame title={survey.title}>
            <form id="AnswerSurveyForm">
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
                                onClick={() => {
                                    answerSurveySubmit(survey);
                                }}
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
    return axios.get('/api/surveys').then((surveys) => {
        for(const key in surveys.data){     
            if(id == surveys.data[key].title){
                return surveys.data[key];
            }
        }
    });
}

function answerSurveySubmit(survey) {
    for (const key in survey.questions) {
        const question = survey.questions[key];
        question.answers.push(question.value);
    }
}

export { AnswerSurvey };
