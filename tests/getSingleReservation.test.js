const rp = require('request-promise-native');
const config = require('config');

const reservationUrl = config.get('reservations-url')+'/reservations';

async function makeAReservation() {
    const date = new Date();
    let options = {
        method: 'POST',
        uri: reservationUrl,
        headers: {
        },
        body: {
            "customerId": "sam.test@test.com",
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
    let response = await rp(options);
    console.log("new reservation ID: " + response)
    return response
}

async function getSingleReservation() {
    const options = {
        url: reservationUrl + "/" + reservationId,
    };
}

it(`Testing to see if ${reservationUrl} is up`, async () =>{
    const reservationId = await makeAReservation()

    const trimmedId = reservationId.split(' ')[1]

    var options = {
        uri: reservationUrl + "/" + trimmedId,
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

// const rp = require('request-promise-native');
// const config = require('config');

// const reservationUrl = config.get('reservations-url')+'/reservations/906b8576-98d4-4aa8-8963-55ef5f372ba6';

// it(`Testing to see if ${reservationUrl} is up`, async () =>{
    
//     var options = {
//         uri: reservationUrl,
//         headers:{
//         },
//     };

//     var errorWasCaught=false;
//     var errorCaught=null;

//     try{
//         var response = await rp(options);
//         //console.log(JSON.stringify(response));
//     } catch (exception){
//         errorCaught=exception;
//         errorWasCaught=true;
//     }
//     expect(errorWasCaught).toBe(false);//assertion of what is expected
// })


