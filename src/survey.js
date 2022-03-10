import { Box } from '@chakra-ui/react';
import { Frame } from './frame';
import React, { useState, useEffect } from 'react';

function Survey() {
	const [data,setData]=useState([]);
	const getData=()=>{
	fetch('namesurvey.json'
	,{
	  headers : { 
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	   }
	)
	  .then(function(response){
		console.log(response)
		return response.json();
	  })
	  .then(function(myJson) {
		console.log(myJson);
		setData(myJson)
	  });
	}
	useEffect(()=>{
	getData()
	},[])
    let title = 'Survey Title';
    let desc = 'a place to answer questions';

    return (
        <Frame title={data.title}>
            <Box>{data.description}</Box>
        </Frame>
    );
}

export { Survey };
