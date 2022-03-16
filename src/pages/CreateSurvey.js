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

//var bodyParser = require('body-parser');

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
        let question = this.questions[0];
        console.log(question);       
       
    };

    removeQuestion = (question) => {
        const index = this.questions.findIndex(
            (x) => x.props.id === question.props.id,
        );
        this.questions.splice(index, 1);
        this.forceUpdate();
    };

    
    createSurveySubmit() {
        //grabing the title and desctiption of the form 
        let title = document.forms["CreateSurveyForm"]["surveyTitle"].value;
        let description = document.forms["CreateSurveyForm"]["desc"].value;
       // let question = document.forms["CreateSurveyForm"]["questions"].value;
        const allQuestions= [];
    
        for(let i = 1; i > 3; i++){
             let question = document.forms["CreateSurveyForm"][i].value;
             allQuestions.push(question);
             alert(question);
         }
        alert(title + " " + description + " " );
    };

    render() {
        return (
            <Frame title="Create a New Survey">
                <form id="CreateSurveyForm" onSubmit={this.createSurveySubmit}>
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
                            <FormControl>
                                <FormLabel htmlFor="question">
                                    Questions
                                </FormLabel>

                                <QuestionList questions={this.questions} />
                            </FormControl>
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


