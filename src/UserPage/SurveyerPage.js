import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    Stack,
    Textarea,
} from '@chakra-ui/react';
import { Frame } from '../frame';
var database = require('../surveys.json');
var list = database.tables


function DisplaySurveys() {
	
    return (
		<Frame title="Your Surveys:">
			{
				for (let i = 0; i < list.length; i++) {
			
				<Stack direction="row" justifyContent="space-between">
				<p>{list[i].title}</p>);
					//<p>{database.description}</p>
				</Stack>
				}
			}

		</Frame>
	);
}


export { DisplaySurveys };

//Testing multiple tables showing up
			// <Stack direction="row" justifyContent="space-between">
				// <p>{database.title}</p>
				// <p>{database.description}</p>
				// <p>{list.length}</p>
			// </Stack>
