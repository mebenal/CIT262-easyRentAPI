module.exports.getAllReservation = async function getAllReservation(rp, resevationsUrl) {
  const options = {
    uri: `${resevationsUrl}/reservations`,
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

module.exports.makeReservation = async function makeReservation(rp, reservationsUrl) {
  const options = {
    method: 'POST',
    uri: `${reservationsUrl}/reservations`,
    headers: {
    },
    body: {
      customerId: 64209000,
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
  } catch (exception) {
    funcResp.errorCaught = exception;
    funcResp.errorWasCaught = true;
  }

  return funcResp;
};

module.exports.getSingleReservation = async function
getSingleReservation(rp, reservationsUrl, create) {
  const options = {
    uri: `${reservationsUrl}/reservations/${create}`,
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