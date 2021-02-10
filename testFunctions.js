module.exports.getAll = async function getAll(rp, easyRentUrl) {
  const options = {
    uri: `${easyRentUrl}`,
    headers: {
    },
  };

  const funcResp = {
    errorWasCaught: false,
    errorCaught: null,
  };

  try {
    const response = await rp(options);
  } catch (exception) {
    funcResp.errorCaught = exception;
    funcResp.errorWasCaught = true;
  }

  return funcResp;
};

module.exports.getSingle = async function getSingle(rp, easyRentUrl, id) {
  const options = {
    uri: `${easyRentUrl}/${id}`,
    headers: {
    },
  };

  const funcResp = {
    errorWasCaught: false,
    errorCaught: null,
  };

  try {
    const response = await rp(options);
  } catch (exception) {
    funcResp.errorCaught = exception;
    funcResp.errorWasCaught = true;
  }

  return funcResp;
};

module.exports.createCustomer = async function createCustomer(rp, customerUrl, id) {
  const options = {
    method: 'POST',
    uri: customerUrl,
    headers: {
    },
    body: {
      'customerName': 'Sam Test',
      'email': id,
      'phone': '123-456-7890',
      'birthDay': '1998-09-01',
    },
    json: true,
    simple: false,
  }

  const funcResp = {
    errorWasCaught: false,
    errorCaught: null,
    }

  try {
    const response = await rp(options);
  } catch (exception) {
    funcResp.errorCaught = exception;
    funcResp.errorWasCaught = true;
  }

  return funcResp;
}

module.exports.createReservation = async function createReservation(rp, reservationsUrl, id) {
  const options = {
    method: 'POST',
    uri: reservationsUrl,
    headers: {
    },
    body: {
      customerId: `${id}`,
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

  const funcResp = {
    errorWasCaught: false,
    errorCaught: null,
    response: null,
  };

  try {
    funcResp.response = await rp(options);
    funcResp.response = funcResp.response.substr(9);
  } catch (exception) {
    funcResp.errorCaught = exception;
    funcResp.errorWasCaught = true;
  }

  return funcResp;
};
