request = require ('request');

request('http://dev-constellation.citwdd.net/', (err,response, body)=>{
    console.log('Error: '+err);
    console.log('Body: '+body);
});