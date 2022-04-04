import { Frame } from '../components/frame';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
var database = require('../database/data.json');
var MongoClient = require('mongodb').MongoClient;
const connection =
    'mongodb+srv://user:password124@surveygorilla.zlnea.mongodb.net/SurveyGorilla?retryWrites=true&w=majority';

function DisplaySurveys() {
	var surveys;
	MongoClient.connect(connection, function(err, db) {
		if (err) throw err;
		var dbo = db.db("SurveyGorilla");
		dbo.collection("surveys").find({}).toJSON(function(err, result) {
			if (err) throw err;
			console.log(result);
			surveys = result;
			db.close();
		});
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
                <Tbody>{renderRows(surveys)}</Tbody>
            </Table>
        </Frame>
    );
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
