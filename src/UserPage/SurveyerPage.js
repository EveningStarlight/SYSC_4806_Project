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
	var data = JSON.parse(database);

    return (
		<Frame title="Your Surveys:">
			
			<stack direction = "row">
				<p> data[0][1] </p>
				//<p> data[1] </p>
			</stack>
			
		</Frame>
	);
}


export { DisplaySurveys };