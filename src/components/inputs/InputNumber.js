import React from 'react';
import { Input, FormLabel, Stack } from '@chakra-ui/react';

class InputNumber extends React.Component {
    render() {
        const qId = this.props.id + 'Q';
        const minId = this.props.id + 'Min';
        const maxId = this.props.id + 'Max';

        return (
            <Stack direction={'column'} w="100%">
                <Stack direction={'row'}>
                    <FormLabel htmlFor={qId}>Question:</FormLabel>
                    <Input type="text" id={qId} placeholder="Enter Question" />
                </Stack>
                <Stack direction={'row'}>
                    <FormLabel htmlFor={minId}>Minimum Value:</FormLabel>
                    <Input
                        type="number"
                        id={minId}
                        placeholder="Enter Minimum Value"
                    />
                    <FormLabel htmlFor={maxId}>Maximum Value:</FormLabel>
                    <Input
                        type="number"
                        id={maxId}
                        placeholder="Enter Maximum Value"
                    />
                </Stack>
            </Stack>
        );
    }
}

export { InputNumber };
