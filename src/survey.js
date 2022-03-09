import { Box } from '@chakra-ui/react';
import { Frame } from './frame';

function Survey() {
    let title = 'Survey Title';
    let desc = 'a place to answer questions';

    return (
        <Frame title={title}>
            <Box>{desc}</Box>
        </Frame>
    );
}

export { Survey };
