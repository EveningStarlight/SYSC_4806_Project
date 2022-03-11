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


function DisplaySurveys() {
	
    return (
		<Frame title="Your Surveys:">
			
			<Stack direction="row" justifyContent="space-between">
				<a> document.write( database.'title'); </a>
				
			</Stack>
			
		</Frame>
	);
}


export { DisplaySurveys };