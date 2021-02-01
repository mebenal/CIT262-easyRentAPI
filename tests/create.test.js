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

    var errorWasCaught=false;
    var errorCaught=null;

    try{
        var response = await rp(options);
        //console.log(response)
    } catch (exception){
        errorCaught=exception;
        errorWasCaught=true;
    }
    expect(errorWasCaught).toBe(false);//assertion of what is expected
})