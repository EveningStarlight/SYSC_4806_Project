import { Frame } from '../components/frame';
import { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import axios from 'axios';

var database = require('../database/data.json');
function AnswerSurveyList() {
    const [surveyList, setSurveyList] = useState(null);
    useEffect(() => {
        getAllSurveys().then((data) => {
            setSurveyList(data);
        });
    }, []);

    return (
        <Frame title="Surveys:">
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th fontSize="lg">Available Surveys</Th>
                        <Th fontSize="lg" style={{ textAlign: 'center' }}>
                            Survey Details
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>{renderRows(surveyList)}</Tbody>
            </Table>
        </Frame>
    );
}

function renderRows(surveys) {
    const list = [];
    for (const key in surveys) {
        const survey = surveys[key];
        let route = '/survey/' + survey.title;
        list.push(
            <Tr justifycontent="space-evenly" key={key}>
                <Td>{survey.title}</Td>
                <Td>{survey.description}</Td>
                <Td style={{ textAlign: 'center' }}>
                    <RouteLink to={route}>
                        <Button m={3} colorScheme="purple">
                            Answer Survey
                        </Button>
                    </RouteLink>
                </Td>
            </Tr>,
        );
    }

    return list;
}

function getAllSurveys() {
    return axios.get('/api/surveys').then((surveys) => {
        return surveys.data;
    });
}

export { AnswerSurveyList };
