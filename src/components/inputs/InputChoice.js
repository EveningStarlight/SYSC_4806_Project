import React from 'react';
import { Button, FormLabel, Input, Stack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { Choice } from './Choice';
import { ChoiceList } from './ChoiceList';

class InputChoice extends React.Component {
    constructor(props) {
        super(props);
        this.choices = [];
        this.nextId = 1;

        this.json = this.props.json;
        this.json.question = '';
        this.json.type = 'choice';
        this.json.choices = {};
        this.json.answers = [];

        this.addChoice();
        this.addChoice();
    }

    getNextId = () => {
        const id = this.props.idPrefix + '-Ch-' + this.nextId.toString();
        this.nextId += 1;
        return id;
    };

    addChoice = () => {
        const id = this.getNextId();
        this.json.choices[id] = {};
        this.choices.push(
            <Choice
                id={id}
                key={id}
                json={this.json.choices[id]}
                delete={this.removeChoice}
                type="choice"
            />,
        );
    };

    removeChoice = (choice) => {
        delete this.json.choices[choice.props.id];
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
                    <Input
                        type="text"
                        id={id}
                        placeholder="Enter a Question"
                        onChange={(e) => {
                            this.json.question = e.target.value;
                        }}
                    />
                </Stack>
                <Stack direction={'column'}>
                    <ChoiceList choices={this.choices} />
                    <Button
                        aria-label="Add Choice"
                        colorScheme="green"
                        leftIcon={<AddIcon />}
                        onClick={() => {
                            this.addChoice();
                            this.forceUpdate();
                        }}
                    >
                        Add Choice
                    </Button>
                </Stack>
            </Stack>
        );
    }
}

export { InputChoice };
