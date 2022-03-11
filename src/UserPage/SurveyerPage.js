import { Stack } from '@chakra-ui/react';
import { Frame } from '../frame';
var database = require('../surveys.json');
var list = database.tables;

function DisplaySurveys() {
    return (
        <Frame title="Your Surveys:">
            <div id="tables">
                <Stack direction="row" justifyContent="space-between">
                    <p>{list[0].title}</p>
                    <p>{list[0].description}</p>
                </Stack>
            </div>
        </Frame>
    );
}

export { DisplaySurveys };

//Testing multiple tables showing up
//	{ window.onload = () =>{ document.getElementById("tables").appendChild( getTableInfo )}};
// <Stack direction="row" justifyContent="space-between">
// <p>{database.title}</p>
// <p>{database.description}</p>
// <p>{list.length}</p>
// </Stack>
// function getTableInfo(){

// for(var i = 0; i < (list.length); i++) {
// document.createElement(<Box>);
// document.createElement(<Stack  direction="row" justifyContent="space-between">);
// document.createElement(<p>{list[i].title}</p>);
// document.createElement(<p>{list[i].description}</p>);
// document.createElement(</Stack>);
// document.createElement(</Box>);
// }

// }
