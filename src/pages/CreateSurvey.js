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

        const id = [this.getNextId(), this.getNextId(), this.getNextId()];
        this.questions = [
            <Question id={id[0]} delete={this.removeQuestion} type="text" />,
            <Question id={id[1]} delete={this.removeQuestion} type="number" />,
            <Question id={id[2]} delete={this.removeQuestion} type="choice" />,
        ];
    }

    getNextId = () => {
        const id = 'Q-' + this.nextId.toString();
        this.nextId += 1;
        return id;
    };

    addQuestion = () => {
        this.questions.push(
            <Question
                id={this.nextId}
                key={this.nextId.toString()}
                delete={this.removeQuestion}
                type="text"
            />,
        );
        this.nextId += 1;
        this.forceUpdate();
    };

    removeQuestion = (question) => {
        const index = this.questions.findIndex(
            (x) => x.props.id === question.props.id,
        );
        this.questions.splice(index, 1);
        this.forceUpdate();
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
                                ></Textarea>
                            </FormControl>
                            <QuestionList questions={this.questions} />
                        </Box>
                        <Button
                            aria-label="Add Question"
                            colorScheme="green"
                            leftIcon={<AddIcon />}
                            onClick={this.addQuestion}
                        >
                            Add Question
                        </Button>

                        <Stack direction="row" justifyContent="space-between">
                            <Button id="resetButton" type="reset" value="reset">
                                Reset
                            </Button>

                            <Button
                                colorScheme="purple"
                                type="submit"
                                value="submit"
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
