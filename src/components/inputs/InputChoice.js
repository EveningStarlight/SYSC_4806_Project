import React from 'react';
import { Button, FormLabel, Input, Stack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { Choice } from './Choice';
import { ChoiceList } from './ChoiceList';

class InputChoice extends React.Component {
    constructor(props) {
        super(props);
        this.nextId = 3;
        const id1 = this.getNextId();
        const id2 = this.getNextId();
        this.choices = [
            <Choice id={id1} key={id1} delete={this.removeChoice} />,
            <Choice id={id2} key={id2} delete={this.removeChoice} />,
        ];
    }

    getNextId = () => {
        const id = this.props.idPrefix + '-Ch-' + this.nextId.toString();
        this.nextId += 1;
        return id;
    };

    addChoice = () => {
        const id = this.getNextId();
        this.choices.push(
            <Choice
                id={id}
                key={id}
                delete={this.removeChoice}
                type="number"
            />,
        );
        this.forceUpdate();
    };

    removeChoice = (choice) => {
        const index = this.choices.findIndex(
            (x) => x.props.id === choice.props.id,
        );
        this.choices.splice(index, 1);
        this.forceUpdate();
    };

    render() {
        const id = this.props.idPrefix + '-Ch-0';
        return (
            <Stack direction={'column'} w="100%">
                <Stack direction={'row'}>
                    <FormLabel htmlFor={id}>Choice Question</FormLabel>
                    <Input type="text" id={id} placeholder="Enter a Question" />
                </Stack>
                <Stack direction={'column'}>
                    <ChoiceList choices={this.choices} />
                    <Button
                        aria-label="Add Choice"
                        colorScheme="green"
                        leftIcon={<AddIcon />}
                        onClick={this.addChoice}
                    >
                        Add Choice
                    </Button>
                </Stack>
            </Stack>
        );
    }
}

export { InputChoice };
