import React from 'react';
import {
    FormControl,
    HStack,
    IconButton,
    Input,
    ListItem,
} from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';

class Choice extends React.Component {
    render() {
        return (
            <ListItem p={2} key={this.props.id}>
                <FormControl>
                    <HStack>
                        <Input
                            type="text"
                            id={this.props.id}
                            placeholder="Enter a Choice"
                        />
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

export { Choice };
