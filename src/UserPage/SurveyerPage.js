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

function getTableInfo(){
	
	for(var i = 0; i < (list.length); i++) {
		document.createElement(<Box>);
			document.createElement(<Stack  direction="row" justifyContent="space-between">);
				document.createElement(<p>{list[i].title}</p>);
				document.createElement(<p>{list[i].description}</p>);
			document.createElement(</Stack>);
		document.createElement(</Box>);
	}
	
	
	
}
function DisplaySurveys() {
	
    return (
		<Frame title="Your Surveys:">
			<div id="tables">
				{document.getElementById("tables").appendChild( getTableInfo )};
			</div>
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
