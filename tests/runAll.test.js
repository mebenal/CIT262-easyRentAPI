//jest.mock('../testFunctions.js');
//const f = jest.requireActual('../testFunctions.js');

const rp = require('request-promise-native');
const config = require('config');
const f = require('../testFunctions');

const reservationsUrl = config.get('reservations-url');
it('Testing to see if ${reservationsUrl} is up', async () =>{
    //let f = new functions;
    let response1 = await f.getAllReservation(rp, reservationsUrl);

    expect(response1.errorWasCaught).toBe(false);//assertion of what is expected

    let response2 = await f.makeReservation(rp, reservationsUrl);

    expect(response2.errorWasCaught).toBe(false);//assertion of what is expected

    let response3 = await f.getSingleReservation(rp, reservationsUrl, response2.response.substring(9));

    expect(response3.errorWasCaught).toBe(false);//assertion of what is expected
})