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
			<Stack direction="row" justifyContent="space-between">
				<p>{database.title}</p>
				<p>{database.description}</p>
				<p>{list.length}</p>
			</Stack>

		</Frame>
	);
}


export { DisplaySurveys };

//Testing multiple tables showing up
		// 
			// for (let i = 0; i < database.tables; i++) {
		
			// <Stack direction="row" justifyContent="space-between">
				// <p>{database.title}</p>
				// <p>{database.description}</p>
				
			// </Stack>
			// }
		// 