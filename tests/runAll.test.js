import {getAllReservation, makeReservation, getSingleReservation} from '../testFunctions.js';

const rp = require('request-promise-native');
const config = require('config');

const reservationsUrl = config.get('reservations-url');
it('Testing to see if ${reservationsUrl} is up', async () =>{

    let response1 = getAllReservation(rp, reservationUrl);

    expect(response1.errorWasCaught).toBe(false);//assertion of what is expected

    let response2 = makeReservation(rp, reservationUrl);

    expect(response2.errorWasCaught).toBe(false);//assertion of what is expected

    let response3 = getSingleReservation(rp, reservationsUrl, response2.response);

    expect(response3.errorWasCaught).toBe(false);//assertion of what is expected
})