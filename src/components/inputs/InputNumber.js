import React from 'react';
import { Input, FormLabel, Stack } from '@chakra-ui/react';

class InputNumber extends React.Component {
    constructor(props) {
        super(props);
        this.json = this.props.json;
        this.json.question = '';
        this.json.type = 'number';
        this.json.max = '';
        this.json.min = '';
        this.json.answers = [];
    }

    render() {
        const qId = this.props.id + 'Q';
        const minId = this.props.id + 'Min';
        const maxId = this.props.id + 'Max';

        return (
            <Stack direction={'column'} w="100%">
                <Stack direction={'row'}>
                    <FormLabel htmlFor={qId}>Question:</FormLabel>
                    <Input
                        type="text"
                        id={qId}
                        placeholder="Enter Question"
                        onChange={(e) => {
                            this.json.question = e.target.value;
                        }}
                    />
                </Stack>
                <Stack direction={'row'}>
                    <FormLabel htmlFor={minId}>Minimum Value:</FormLabel>
                    <Input
                        type="number"
                        id={minId}
                        placeholder="Enter Minimum Value"
                        onChange={(e) => {
                            this.json.min = e.target.value;
                        }}
                    />
                    <FormLabel htmlFor={maxId}>Maximum Value:</FormLabel>
                    <Input
                        type="number"
                        id={maxId}
                        placeholder="Enter Maximum Value"
                        onChange={(e) => {
                            this.json.max = e.target.value;
                        }}
                    />
                </Stack>
            </Stack>
        );
    }
}

export { InputNumber };
