const rp = require('request-promise-native');
const config = require('config');
const f = require('../testFunctions');

const reservationsUrl = config.get('reservations-url');
it(`Testing to see if ${reservationsUrl} is up`, async () => {
  const respArray = [];
  const email = `${Date.now()}@test.com`;

  // Checks if the page to get all reservations is working.
  const respGetAllRes = await f.getAll(rp, `${reservationsUrl}/reservations`);
  respArray[respArray.length] = { name: 'Get all reservations', working: !respGetAllRes.errorWasCaught };

  // Checks if the page to get all customers is working.
  const respGetAllCust = await f.getAll(rp, `${reservationsUrl}/customer`);
  respArray[respArray.length] = { name: 'Get all customers', working: !respGetAllCust.errorWasCaught };

  // Checks if can create a user.
  const respCreateCust = await f.createCustomer(rp, `${reservationsUrl}/customer`, email);
  respArray[respArray.length] = { name: 'Create customer', working: !respCreateCust.errorWasCaught };

  // Checks if can create a reservation.
  const respCreateRes = await f.createReservation(rp, `${reservationsUrl}/reservations`, email);
  respArray[respArray.length] = { name: 'Create reservation', working: !respCreateRes.errorWasCaught };

  // Checks if can get a customer.
  const respGetSingCust = await f.getSingle(rp, `${reservationsUrl}/customer`, email);
  respArray[respArray.length] = { name: 'Get one customer', working: !respGetSingCust.errorWasCaught };

  // Checks if can get a reservation.
  const respGetSingRes = await f.getSingle(rp, `${reservationsUrl}/reservations`, respCreateRes.response);
  respArray[respArray.length] = { name: 'Get one reservation', working: !respGetSingRes.errorWasCaught };

  let str = '';
  for (const i of respArray) {
    str += `${i.name} is currently ${i.working ? '' : 'NOT '}working.\n`;
  }
  console.log(str);

  expect(respGetAllRes.errorWasCaught).toBe(false); // assertion of what is expected
  expect(respGetAllCust.errorWasCaught).toBe(false); // assertion of what is expected
  expect(respCreateCust.errorWasCaught).toBe(false); // assertion of what is expected
  expect(respCreateRes.errorWasCaught).toBe(false); // assertion of what is expected
  expect(respGetSingCust.errorWasCaught).toBe(false); // assertion of what is expected
  expect(respGetSingRes.errorWasCaught).toBe(false); // assertion of what is expected
});
