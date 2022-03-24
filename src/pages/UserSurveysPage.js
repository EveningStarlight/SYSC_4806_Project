import { Frame } from '../components/frame';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
} from '@chakra-ui/react';
var database = require('../database/data.json');
var list = database.tables;

function DisplaySurveys() {
    return (
        <Frame title="Your Surveys:">
            <div id="tables">
                <Table>
                    <Thead fontWeight='bold'>
                        <Tr>
                            <Td>Survey Names</Td>
                            <Td>Survey Descriptions</Td>
                            <Td style={{ textAlign: 'center' }}>
                                Survey Details
                            </Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr justifycontent="space-evenly">
                            <Td>
                                <p>{database.title}</p>
                            </Td>
                            <Td>
                                <p>{database.description}</p>
                            </Td>
                            <Td style={{ textAlign: 'center' }}>
                                <Button m={3} colorScheme="purple">
                                    See Details
                                </Button>
                            </Td>
                        </Tr>

                        {/* Now to account for multiple entires. */}
                    </Tbody>
                </Table>
            </div>
        </Frame>
    );
}

export { DisplaySurveys };
