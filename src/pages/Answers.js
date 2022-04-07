import { Box, Center, VStack, Button } from '@chakra-ui/react';
import { Frame } from '../components/frame';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Link as RouteLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Histogram from 'react-chart-histogram';
import { VictoryPie } from 'victory-pie';

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

    if (question.type === 'choice') {
        // Create pi chart
        const labels = new Map();
        for (var i = 0; i < question.answers.length; i++) {
            if (!labels.has(question.answers[i])) {
                labels.set(question.answers[i], 1);
            } else {
                labels.set(
                    question.answers[i],
                    labels.get(question.answers[i]) + 1,
                );
            }
        }
        const data = [];

        labels.forEach(function (value, key) {
            data.push({ x: key, y: value });
        });
        list.push(
            <VictoryPie
                data={data}
                colorScale={[
                    'blue',
                    'yellow',
                    'red',
                    'green',
                    'purple',
                    'orange',
                    'pink',
                    'cyan',
                    'white',
                    'black',
                ]}
                radius={100}
            />,
        );
    } else if (question.type === 'number') {
        // create histogram
        list.push(<Td>{generateHistogram(question)}</Td>);
    } else if (question.type === 'text') {
        for (var i = 0; i < question.answers.length; i++) {
            list.push(question.answers[i] + ',\n');
        }
    }

    return list;
}

function generateHistogram(question) {
    const list = [];
    const labels = new Map();
    for (var i = 0; i < question.answers.length; i++) {
        if (!labels.has(question.answers[i])) {
            labels.set(question.answers[i], 1);
        } else {
            labels.set(
                question.answers[i],
                labels.get(question.answers[i]) + 1,
            );
        }
    }
    for (var i = question.min; i <= question.max; i++) {
        if (!labels.has(i)) {
            labels.set(i, 0);
        }
    }
    var sortedLabels = new Map([...labels.entries()].sort());
    console.log(sortedLabels);
    const xAxis = [];
    const yAxis = [];
    let keyIter = sortedLabels.keys();
    let valueIter = sortedLabels.values();
    for (var i = 0; i < sortedLabels.size; i++) {
        xAxis.push(keyIter.next().value);
        yAxis.push(valueIter.next().value);
    }
    console.log(xAxis);
    console.log(yAxis);
    list.push(
        <Histogram
            xLabels={xAxis} // X AXIS
            yValues={yAxis} // DATA      Y axis auto?
            width="400"
            height="200"
        />,
    );
    return list;
}
