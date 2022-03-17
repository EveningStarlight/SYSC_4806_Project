import React from 'react';
import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    Stack,
    Textarea,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { Frame } from '../components/frame';
import { Question } from '../components/questions/Question';
import { QuestionList } from '../components/questions/QuestionList';

class CreateSurvey extends React.Component {
    constructor(props) {
        super(props);
        this.nextId = 1;
        this.questions = [];

        this.json = {
            title: '',
            description: '',
            questions: {},
        };
        
        this.addQuestion('text');
        this.addQuestion('number');
        this.addQuestion('choice');
    }

    getNextId = () => {
        const id = 'Q-' + this.nextId.toString();
        this.nextId += 1;
        return id;
    };

    addQuestion = (type) => {
        const id = this.getNextId();
        this.json.questions[id] = {};
        this.questions.push(
            <Question
                id={id}
                key={id}
                json={this.json.questions[id]}
                delete={this.removeQuestion}
                type={type ? type : 'text'}
            />,
        );
    };

    removeQuestion = (question) => {
        const index = this.questions.findIndex(
            (x) => x.props.id === question.props.id,
        );
        this.questions.splice(index, 1);
        this.forceUpdate();
    };

    handleClick = () => {
        console.log('json', this.json);
    };

    render() {
        return (
            <Frame title="Create a New Survey">
                <form id="CreateSurveyForm" action="php/CreateSurveyAction.php">
                    <Stack
                        direction="column"
                        justifyContent="space-between"
                        minH="450px"
                    >
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="surveyTitle">
                                    Title of Survey:
                                </FormLabel>

                                <Input
                                    type="text"
                                    id="surveyTitle"
                                    placeholder="Enter your Survey Title"
                                    mb={2}
                                    onChange={(e) => {
                                        this.json.title = e.target.value;
                                    }}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="desc">
                                    {' '}
                                    Description{' '}
                                </FormLabel>

                                <Textarea
                                    id="desc"
                                    placeholder="Enter the survey Description"
                                    mb={2}
                                    onChange={(e) => {
                                        this.json.description = e.target.value;
                                    }}
                                ></Textarea>
                            </FormControl>
                            <QuestionList questions={this.questions} />
                        </Box>
                        <Button
                            aria-label="Add Question"
                            colorScheme="green"
                            leftIcon={<AddIcon />}
                            onClick={()=> {
                                this.addQuestion();
                                this.forceUpdate();
                            }}
                        >
                            Add Question
                        </Button>

                        <Stack direction="row" justifyContent="space-between">
                            <Button id="resetButton" type="reset" value="reset">
                                Reset
                            </Button>

                            <Button
                                colorScheme="purple"
                                onClick={this.handleClick}
                            >
                                Create Survey
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Frame>
        );
    }
}

CreateSurvey.defaultProps = { questions: [] };

export { CreateSurvey };
