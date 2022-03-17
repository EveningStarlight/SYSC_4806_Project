import React from 'react';
import { Input, FormLabel } from '@chakra-ui/react';

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.json = this.props.json;
        this.json.question = '';
        this.json.type = 'text';
    }

    render() {
        return (
            <>
                <FormLabel htmlFor={this.props.id}>Question:</FormLabel>
                <Input
                    type="text"
                    id={this.props.id}
                    placeholder="Enter a Question"
                    onChange={(e) => {
                        this.json.question = e.target.value;
                    }}
                />
            </>
        );
    }
}

export { InputText };
