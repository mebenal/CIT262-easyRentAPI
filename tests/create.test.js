const rp = require('request-promise-native');
const config = require('config');

const createUrl = config.get('reservations-url')+'/reservations';
it(`Testing to see if ${createUrl} is up`, async () => {
    const date = new Date();
    let options = {
        method: 'POST',
        uri: createUrl,
        headers: {
        },
        body: {
            "customerId": "64209000",
            "reservationItems": [
                {
                    "description": "Canoe",
                    "itemId": 8000000
                },
                {
                    "description": "Paddle",
                    "itemId": 4949491
                },
                {
                    "description": "Paddle",
                    "itemId": 4949491
                },
                {
                    "description": "Life Jacket",
                    "itemId": 4949491
                }
            ],
            "dueDate": 1610148694321
        },
        json: true,
        simple: false,
    };

    var errorWasCaught1=false;
    var errorCaught1=null;
    var errorWasCaught2=false;
    var errorCaught2=null;

    try{
        var response1 = await rp(options);
    } catch (exception){
        errorCaught1=exception;
        errorWasCaught1=true;
    }

    console.log(response1)
    debugger;
    options = {
        uri: createUrl + '/' + response1.substring(9),
        headers:{
        },
    };
    debugger;

    try{
        var response2 = await rp(options);
    } catch (exception){
        errorCaught2=exception;
        errorWasCaught2=true;
    }

    console.log(response2);

    expect(errorWasCaught1).toBe(false);//assertion of what is expected
    expect(errorWasCaught2).toBe(false);
})