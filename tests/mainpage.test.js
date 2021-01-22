const rp = require('request-promise-native');
const config = require('config');

const homeUrl = config.get('constellation-url');

it(`Testing to see if ${homeUrl} is up`, async () =>{
    
    var options = {
        uri: homeUrl,
        headers:{
        },
    };

    var errorWasCaught=false;
    var errorCaught=null;

    try{
        var response = await rp(options);
    } catch (exception){
        errorCaught=exception;
        errorWasCaught=true;
    }
    expect(errorWasCaught).toBe(false);//assertion of what is expected
})

