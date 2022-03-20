import { Stack } from '@chakra-ui/react';
import { Frame } from '../frame';
var database = require('../src/database/data.json');
var list = database.tables;

function DisplaySurveys() {
    return (
        <Frame title="Your Surveys:">
            <div id="tables">
                <Stack direction="row" justifyContent="space-between">
					<p>{database.title}</p>
					<p>{database.description}</p>
                </Stack>
            </div>
        </Frame>
    );
}

export { DisplaySurveys };
