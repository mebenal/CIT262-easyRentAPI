const rp = require('request-promise-native');
const config = require('config');

const reservationUrl = `${config.get('reservations-url')}/reservations`;

async function createReservation() {
  const options = {
    method: 'POST',
    uri: reservationUrl,
    headers: {
    },
    body: {
      customerId: 'sam.test@test.com',
      reservationItems: [
        {
          description: 'Canoe',
          itemId: 8000000,
        },
        {
          description: 'Paddle',
          itemId: 4949491,
        },
        {
          description: 'Paddle',
          itemId: 4949491,
        },
        {
          description: 'Life Jacket',
          itemId: 4949491,
        },
      ],
      dueDate: 1610148694321,
    },
    json: true,
    simple: false,
  };

  // Creates object that holds any errors and the api response.
  const funcResp = {
    errorWasCaught: false,
    errorCaught: null,
    response: null,
  };

  // Standard try/catch to handle any errors.
  try {
    funcResp.response = await rp(options);
    // Cuts off beginning of message, leaving just the reservation id.
    funcResp.response = funcResp.response.substr(9);
  } catch (exception) {
    funcResp.errorCaught = exception;
    funcResp.errorWasCaught = true;
  }

  return funcResp;
}

it(`Testing to see if ${reservationUrl} is up`, async () =>{
  // Calls create response, which return an object with errors and the reservation id.
  const createResponse = await createReservation();

  const options = {
    uri: `${reservationUrl}/${createResponse.response}`,
    headers: {
    },
  };

  // Creates a dictionary to store error data in.
  const funcResp = {
    errorWasCaught: false,
    errorCaught: null,
  };

  // Standard try/catch to keep from crashing if site isn't up.
  try {
    const response = await rp(options);
  } catch (exception) {
    funcResp.errorCaught = exception;
    funcResp.errorWasCaught = true;
  }

  // Outputs a string that shows which of the tests are failing.
  const str = `Create reservation is currently ${createResponse.errorWasCaught ? 'NOT ' : ''}working.\n`
            + `Get single reservation is currently ${funcResp.errorWasCaught ? 'NOT ' : ''}working`;

  console.log(str);
  expect(createResponse.errorWasCaught).toBe(false);// assertion of what is expected
  expect(funcResp.errorWasCaught).toBe(false);// assertion of what is expected
});
