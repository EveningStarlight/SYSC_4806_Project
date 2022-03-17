import React from 'react';
import { UnorderedList } from '@chakra-ui/react';

class ChoiceList extends React.Component {
    render() {
        return <UnorderedList>{this.props.choices}</UnorderedList>;
    }
}

export { ChoiceList };
