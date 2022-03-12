import React from 'react';
import { Input, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Field } from 'formik';

class InputText extends React.Component {
    render() {
        return (
            <Input
                type="text"
                id={this.props.id}
                placeholder="Enter a Question"
            />
        );
    }
}

class InputNumber extends React.Component {
    render() {
        const minId = this.props.id + 'Min';
        const maxId = this.props.id + 'Max';

        return (
            <>
                <FormLabel htmlFor={minId}>Minimum Value:</FormLabel>
                <Input
                    type="text"
                    id={minId}
                    placeholder="Enter Minimum Value"
                />
                <FormLabel htmlFor={maxId}>Maximum Value:</FormLabel>
                <Input
                    type="text"
                    id={maxId}
                    placeholder="Enter Maximum Value"
                />
            </>
        );
    }
}

export { InputText, InputNumber };
