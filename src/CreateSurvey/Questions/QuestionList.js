import React from 'react';

class QuestionList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>{this.props.questions}</>;
    }
}

export { QuestionList };
