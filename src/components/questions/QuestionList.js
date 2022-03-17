import React from 'react';
import { OrderedList } from '@chakra-ui/react';

class QuestionList extends React.Component {
    render() {
        return (
            <OrderedList id="questionList">{this.props.questions}</OrderedList>
        );
    }
}

export { QuestionList };
