import { Frame } from '../components/frame';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

var database = require('../database/data.json');
function AnswerSurveyList() {
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
                <Tbody>{renderRows(database.surveys)}</Tbody>
            </Table>
        </Frame>
    );
}

function renderRows(surveys) {
    const list = [];
    for (const key in surveys) {
        list.push(
            <Tr justifycontent="space-evenly" key={key}>
                <Td> {key} </Td>
                <Td style={{ textAlign: 'center' }}>
                    <RouteLink to={'/survey/' + key}>
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

export { AnswerSurveyList };
