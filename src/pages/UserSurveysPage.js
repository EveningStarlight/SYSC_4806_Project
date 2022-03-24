import { Stack } from '@chakra-ui/react';
import { Frame } from '../components/frame';
var database = require('../database/data.json');
var list = database.tables;

function DisplaySurveys() {
    return (
        <Frame title="Your Surveys:">
            <div id="tables">
				<table>
					<thead> 
						<Stack direction="row" justifyContent="space-between">
							<tr>
								<td>
									Survey Name 
								</td>
								<td>
									Survey Description 
								</td>
								<td>
									Survey Details 
								</td>
							</tr>
						</Stack>
					</thead>
					<tbody>
						<Stack direction="row" justifyContent="space-between">
							<tr>
								<td><p>{database.title}</p></td>
								<td><p>{database.description}</p></td>
							</tr>
						</Stack>
					</tbody>
				</table>
            </div>
        </Frame>
    );
}

export { DisplaySurveys };
