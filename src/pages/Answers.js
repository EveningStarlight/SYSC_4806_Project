import { Box, Center, VStack, Button } from '@chakra-ui/react';
import { Frame } from '../components/frame';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Link as RouteLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Histogram from 'react-chart-histogram';

var database = require('../database/data.json');

function Answers() {
const { id } = useParams();
    const [survey, setSurvey] = useState(null);
    useEffect(() => {
        getSurvey(id).then((data) => {
            setSurvey(data);
        });
    }, [id]);

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
                        <Th fontSize="lg">Charts</Th>
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


function renderRows(survey) {
    const list = [];
    for (const key in survey.questions) {
        const question = survey.questions[key];
        list.push(
            <Tr justifycontent="space-evenly" key={key}>
                <Td>{question.question}</Td>
                <Td>{createChart(question)}</Td>
            </Tr>,
        );
    }
    return list;
}

function getSurvey(id) {
    return axios.get('/api/surveys').then((surveys) => {
        console.log(surveys.data);
        for (const key in surveys.data) {
            if (id === surveys.data[key].title) {
                return surveys.data[key];
            }
        }
    });
}

function createChart(question) {
	const list = [];

	if (question.type === 'choice' ){
	   // Create pi chart 
	}
	else if ( question.type === 'number' ){
		// create histogram
		list.push(
				<Td>
					<Histogram
						xLabels={generateXAxis(question) } // X AXIS
						yValues={generateYAxis(question) } // DATA      Y axis auto?
						width='400'
						height='200'
					/>
				</Td>
		);		   
	}
	else if ( question.type === 'text' ){
		list.concat(question.answers);
	}

    return list;
}




function generateYAxis(question){
	const list = [];
	const counted = new Set();
	var numberOfOccurances = 0;
	for (var i = 0; i < question.answers.length; i++){
		var tempAnswer = question.answers[i];
		if (!counted.has(tempAnswer)){
			counted.add(tempAnswer);
			for (var j = 0; j < question.answers.length; j++){
				if (tempAnswer === question.answers[j]){
					numberOfOccurances++;
				}
			}
			list.push(numberOfOccurances);
		}
	}
	
	
	return list;
	
}

function generateXAxis(question){
	const list = [];
	for(var i = question.min; i <= question.max; i++){list.push(i)}
	return list;
}
