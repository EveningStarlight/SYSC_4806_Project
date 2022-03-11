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
			<p>Hello World!</p>
		</Frame>
	);
}


export { DisplaySurveys };