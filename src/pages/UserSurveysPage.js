import { Stack } from '@chakra-ui/react';
import { Frame } from '../components/frame';
var database = require('../database/data.json');
var list = database.tables;

function DisplaySurveys() {
    return (
        <Frame title="Your Surveys:">
            <div id="tables">
				<table>
					<th> 
						<td>
							Survey Name 
						</td>
						<td>
							Survey Description" 
						</td>
						<td>
							Survey Details 
						</td>
					</th>
					
					<Stack direction="row" justifyContent="space-between">
						<tr>
							<p>{database.title}</p>
							<p>{database.description}</p>
						</tr>
					</Stack>
				</table>
            </div>
        </Frame>
    );
}

export { DisplaySurveys };
