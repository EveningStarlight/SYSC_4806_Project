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
			
			<stack direction = "row">
				<p> data['title'] </p>
				<p> data['description'] </p>
				
			</stack>
			
		</Frame>
	);
}


export { DisplaySurveys };