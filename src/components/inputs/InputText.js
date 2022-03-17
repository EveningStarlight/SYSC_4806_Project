import React from 'react';
import { Input, FormLabel } from '@chakra-ui/react';

class InputText extends React.Component {
    render() {
        return (
            <>
                <FormLabel htmlFor={this.props.id}>Question:</FormLabel>
                <Input
                    type="text"
                    id={this.props.id}
                    placeholder="Enter a Question"
                />
            </>
        );
    }
}

export { InputText };
