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
import { Frame } from '../frame';
import { Question } from './Questions/Question';
import { QuestionList } from './Questions/QuestionList';
import { AddIcon } from '@chakra-ui/icons';

class NewSurvey extends React.Component {
    constructor(props) {
        super(props);
        this.nextId = 1;
        this.questions = [];
        this.addQuestion();
        this.addQuestion();
    }

    addQuestion = () => {
        this.questions.push(
            <Question
                id={this.nextId}
                key={this.nextId.toString()}
                delete={this.removeQuestion}
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

                            <Button type="submit" value="submit">
                                Create Survey
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Frame>
        );
    }
}

NewSurvey.defaultProps = { questions: [] };

export { NewSurvey };
