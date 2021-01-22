var rp = require('request-promise-native');

var options = {
    uri: 'http://dev-constellation.citwdd.net',
    headers:{
    },
};

var test = async () =>{

try{
    var response = await rp(options);
} catch (error)    {
    console.log(error);
}
};


test();