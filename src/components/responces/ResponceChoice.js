import React from 'react';
import { FormLabel, Stack, Radio, RadioGroup } from '@chakra-ui/react';

function ResponceChoice(props) {
    const question = props.question;
    const key = props.qKey + 'input';

    return (
        <>
            <FormLabel htmlFor={key} fontSize="xl" fontWeight="extrabold">
                {question.question}
            </FormLabel>
            <RadioGroup onChange={(v) => console.log('v: ', v)}>
                <Stack>{renderRadio(question.choices)}</Stack>
            </RadioGroup>
        </>
    );
}

function renderRadio(choices) {
    const list = [];
    for (const key in choices) {
        list.push(
            <Radio key={key} value={choices[key].choice}>
                {choices[key].choice}
            </Radio>,
        );
    }
    return list;
}

export { ResponceChoice };
