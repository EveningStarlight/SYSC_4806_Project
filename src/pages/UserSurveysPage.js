import { Frame } from '../components/frame';
import { useState} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import axios from 'axios';
var database = require('../database/data.json');


function DisplaySurveys() {
	const [surveyList, setSurveyList] = useState([]);
	getAllSurveys()
		.then(data => {
			setSurveyList(data);
			console.log(surveyList);
		});
    return (
        <Frame title="Your Surveys:">
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th fontSize="lg">Survey Names</Th>
                        <Th fontSize="lg">Survey Descriptions</Th>
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

function getAllSurveys(){
	return axios
			.get("/api/surveys")
			.then((surveys) => {
				console.log(surveys.data)
				return surveys.data
				})
}

function renderRows(surveys) {
    const list = [];
    for (const key in surveys) {
        const survey = surveys[key];
        let route = '/Answers/' + key;
        list.push(
            <Tr justifycontent="space-evenly" key={key}>
                <Td>{survey.title}</Td>
                <Td>{survey.description}</Td>
                <Td style={{ textAlign: 'center' }}>
                    <RouteLink to={route}>
                        <Button m={3} colorScheme="purple">
                            See Details
                        </Button>
                    </RouteLink>
                </Td>
            </Tr>,
        );
    }

    return list;
}

export { DisplaySurveys };
