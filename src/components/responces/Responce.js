import { ResponceText } from './ResponceText';
import { ResponceNumber } from './ResponceNumber';
import { ResponceChoice } from './ResponceChoice';
import { Box } from '@chakra-ui/react';

function Responce(props) {
    const question = props.question;
    const key = props.qKey;

    let responce = null;

    if (question.type === 'text') {
        responce = <ResponceText qKey={key} question={question} />;
    } else if (question.type === 'number') {
        responce = <ResponceNumber qKey={key} question={question} />;
    } else if (question.type === 'choice') {
        responce = <ResponceChoice qKey={key} question={question} />;
    } else {
        responce = <Box>The question type {question.type} is undefined</Box>;
    }

    return (
        <Box
            w="100%"
            m={5}
            p={5}
            border="2px"
            borderColor="purple.200"
            borderRadius={10}
            bg="purple.50"
        >
            {responce}
        </Box>
    );
}

export { Responce };
