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
import { AddIcon } from '@chakra-ui/icons';

class NewSurvey extends React.Component {
    constructor(props) {
        super(props);
        this.state = { questions: [] };
        this.addQuestion();
        this.addQuestion();
    }

    addQuestion = () => {
        const num = this.state.questions.length + 1;
        this.state.questions.push(<Question id={num} key={num.toString()} />);
        console.log(this.state.questions);
        this.forceUpdate();
    };

    removeQuestion(question) {}

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
                            {this.state.questions}
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
