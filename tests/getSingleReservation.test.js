const rp = require('request-promise-native');
const config = require('config');

const reservationUrl = config.get('reservations-url')+'/reservations/906b8576-98d4-4aa8-8963-55ef5f372ba6';

it(`Testing to see if ${reservationUrl} is up`, async () =>{
    
    var options = {
        uri: reservationUrl,
        headers:{
        },
    };

    var errorWasCaught=false;
    var errorCaught=null;

    try{
        var response = await rp(options);
        //console.log(JSON.stringify(response));
    } catch (exception){
        errorCaught=exception;
        errorWasCaught=true;
    }
    expect(errorWasCaught).toBe(false);//assertion of what is expected
})

