const rp = require('request-promise-native');
const config = require('config');

const newUserUrl = config.get('constellation-url') + '/account/register';
console.log(newUserUrl);

it(`Testing to see if ${newUserUrl} is up`, async () => {
    const date = new Date();
    let options = {
        method: 'POST',
        uri: newUserUrl,
        headers: {
        },
        formData: {
            'Email': `testUser${date.getTime()}@email.com`,
            'Password': 'Passw0rd_',
            'ConfirmPassword': 'Passw0rd_'
        },
        simple: false,
    };

    let errorWasCaught = false;
    let errorCaught = null;

    try {
        let response = await rp(options);
    } catch (exception) {
        errorCaught = exception;
        errorWasCaught = true;
        throw console.log(errorCaught);
    }

    expect(errorWasCaught).toBe(false);
});


