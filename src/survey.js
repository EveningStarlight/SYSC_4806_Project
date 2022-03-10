import { Box } from '@chakra-ui/react';
import { Frame } from './frame';
import React, { useState, useEffect } from 'react';

function Survey() {
	var survey = require('./namesurvey.json');
    let title = 'Survey Title';
    let desc = 'a place to answer questions';

    return (
        <Frame title={survey.title}>
            <Box>{survey.description}</Box>
        </Frame>
    );
}

export { Survey };
