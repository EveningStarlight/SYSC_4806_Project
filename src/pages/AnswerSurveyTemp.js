import { Frame } from '../components/frame';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
var database = require('../database/data.json');
import { AnswerSurvey } from '../pages/AnswerSurvey';
import { Link as RouteLink } from 'react-router-dom';
function AnswerSurveyTemp() {
    return (
        <Frame title="Available Surveys:">
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th fontSize="lg">Survey Names</Th>
                        <Th fontSize="lg" style={{ textAlign: 'center' }}>
                            Survey Details
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr justifycontent="space-evenly">
                        <Td>{database.title}</Td>
                        <Td style={{ textAlign: 'center' }}>
							<RouteLink to="/survey:test">
								<Button m={3} colorScheme="purple">
									Test Survey
								</Button>
							</RouteLink>
                        </Td>
                    </Tr>
					
					
					<Tr justifycontent="space-evenly">
                        <Td>{database.title}</Td>
                        <Td style={{ textAlign: 'center' }}>
          					<RouteLink to="/survey:pets">
								<Button m={3} colorScheme="purple">
									Pets Survey
								</Button>
							</RouteLink>
                        </Td>
                    </Tr>
					
					
					<Tr justifycontent="space-evenly">
                        <Td>{database.title}</Td>
                        <Td style={{ textAlign: 'center' }}>
							<RouteLink to="/survey:movie">
								<Button m={3} colorScheme="purple">
									Answer Survey
								</Button>
							</RouteLink>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Frame>
    );
}

export { AnswerSurveyTemp };
