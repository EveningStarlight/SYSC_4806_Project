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
        this.nextId = 3;
        this.questions = [
            <Question id={'1'} key={'1'} delete={this.removeQuestion} />,
            <Question id={'2'} key={'2'} delete={this.removeQuestion} />,
        ];
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

CreateSurvey.defaultProps = { questions: [] };

export { CreateSurvey };
