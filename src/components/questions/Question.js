import React from 'react';
import {
    IconButton,
    FormControl,
    HStack,
    ListItem,
    Select,
} from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';

import { inputs, InputText, InputNumber, InputChoice } from '../inputs/Inputs';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.type = this.props.type;
        this.json = this.props.json;
        this.json.title = 'someText'      
    }
    
     makeOption = (value) => {
        return <option value={value}>{value}</option>
    };


    render() {
        return (
            <ListItem
                role="question"
                p={4}
                my={4}
                border="2px"
                borderColor="purple.200"
                borderRadius={10}
                key={this.props.id}
            >
                <Select
                    mb={3}
                    value={this.type}
                    onChange={(e) => {
                        this.type = e.target.value;
                        this.forceUpdate();
                    }}
                >
                    {inputs.values.map(this.makeOption)}
                </Select>
                <FormControl>
                    <HStack>
                        {this.type === 'text' ? (
                            <InputText />
                        ) : this.type === 'number' ? (
                            <InputNumber />
                        ) : this.type === 'choice' ? (
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
