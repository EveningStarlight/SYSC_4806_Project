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

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.delete = props.delete;
    }

    render() {
        return (
            <ListItem>
                <FormControl>
                    <HStack mb={2}>
                        <Input
                            type="text"
                            id={this.props.id}
                            placeholder="Enter the question"
                        />
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

export { Question };
