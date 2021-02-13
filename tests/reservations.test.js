const rp = require('request-promise-native');
const config = require('config');

const reservationsUrl = `${config.get('reservations-url')}/reservations`;
it(`Testing to see if ${reservationsUrl} is up`, async () => {
  const options = {
    uri: reservationsUrl,
    headers: {
    },
  };

  let errorWasCaught = false;
  let errorCaught = null;

  try {
    const response = await rp(options);
    // console.log(response);
  } catch (exception) {
    errorCaught = exception;
    errorWasCaught = true;
  }
  expect(errorWasCaught).toBe(false);// assertion of what is expected
});
