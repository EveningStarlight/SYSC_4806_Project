import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
    colors: {
        primary: '#d7b7f0',
    },
    styles: {
        global: (props) => ({
            body: {
                bg: 'primary',
                fontFamily: 'Verdana',
            },
        }),
    },
});
