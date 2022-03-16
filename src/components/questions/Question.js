import React from 'react';
import {
    Input,
    IconButton,
    FormControl,
    FormLabel,
    HStack,
    ListItem,
} from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';

import { InputText, InputNumber, InputChoice } from '../inputs/Inputs';

class Question extends React.Component {
    render() {
        return (
            <ListItem role="question">
                <FormControl>
                    <HStack p={4} m={2} border="1px">
                        {this.props.type === 'text' ? (
                            <InputText />
                        ) : this.props.type === 'number' ? (
                            <InputNumber />
                        ) : this.props.type === 'choice' ? (
                            <InputChoice idPrefix={this.props.id} />
                        ) : (
                            <></>
                        )}

                        <IconButton
                            aria-label="Remove Question"
                            colorScheme="red"
                            icon={<MinusIcon />}
                            onClick={() => this.props.delete(this)}
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
