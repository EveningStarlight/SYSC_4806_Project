import { Box, Center, VStack, Button } from '@chakra-ui/react';
import { Frame } from '../components/frame';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Link as RouteLink, useParams } from 'react-router-dom';
var database = require('../database/data.json');

function Answers() {
    const { id } = useParams();
    const survey = getSurvey(id);

    return !survey ? (
        <Frame>
            <Center fontWeight="bold" fontSize="xl">
                There was no survey found with the id: {id}
            </Center>
        </Frame>
    ) : (
        <Frame title="Survey Answers!">
            <Box m={3}>All of you answers to your survey</Box>

            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th fontSize="lg">Question</Th>
                        <Th fontSize="lg">Answers</Th>
                    </Tr>
                </Thead>
                <Tbody>{renderRows(survey)}</Tbody>
            </Table>

            <VStack m={3}>
                <RouteLink to="/UserSurvey">
                    <Button m={3} colorScheme="purple">
                        Go back to Surveys
                    </Button>
                </RouteLink>
            </VStack>
        </Frame>
    );
}

export { Answers };

function getSurvey(id) {
    return database.surveys[id];
}

function renderRows(survey) {
    const list = [];
    for (const key in survey.questions) {
        const question = survey.questions[key];
        list.push(
            <Tr justifycontent="space-evenly" key={key}>
                <Td>{question.question}</Td>
                <Td>{question.answers.join(', ')}</Td>
            </Tr>,
        );
    }

    return list;
}
