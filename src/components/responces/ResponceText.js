import React from 'react';
import { Input, FormLabel } from '@chakra-ui/react';

function ResponceText(props) {
    const question = props.question;
    const key = props.qKey + 'input';

    return (
        <>
            <FormLabel htmlFor={key} fontSize="xl" fontWeight="extrabold">
                {question.question}
            </FormLabel>
            <Input
                onChange={(v) => (question.value = v.target.value)}
                type="text"
                id={key}
                placeholder="Enter a Responce"
            />
        </>
    );
}

export { ResponceText };
