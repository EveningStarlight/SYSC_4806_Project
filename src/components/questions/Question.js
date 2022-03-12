import React from 'react';
import {
    Input,
    IconButton,
    FormControl,
    HStack,
    ListItem,
} from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';

import { InputText, InputNumber } from './Inputs';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.delete = props.delete;
    }

    render() {
        return (
            <ListItem>
                <FormControl>
                    <FormLabel htmlFor={this.props.id}>
                        {' '}
                        Question {this.props.id}:{' '}
                    </FormLabel>
                    <HStack mb={2}>
                        {this.props.type === 'text' ? (
                            <InputText />
                        ) : this.props.type === 'number' ? (
                            <InputNumber />
                        ) : (
                            <></>
                        )}

                        <IconButton
                            aria-label="Remove Question"
                            colorScheme="red"
                            icon={<MinusIcon />}
                            onClick={() => this.delete(this)}
                        />
                    </HStack>
                </FormControl>
            </ListItem>
        );
    }
}

Question.defaultProps = {
    type: 'text',
};

export { Question };
