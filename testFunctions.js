module.exports.getAllReservation = async function getAllReservation(rp, resevationsUrl) {
    var options = {
        uri: `${resevationsUrl}/reservations`,
         headers:{
                },
    };
    
    let funcResp = {
        errorWasCaught:false,
        errorCaught:null
    }
        
    try{
        var response = await rp(options);
     } catch (exception){
        funcResp.errorCaught=exception;
        funcResp.errorWasCaught=true;
    }
        
    return funcResp
}

module.exports.makeReservation = async function makeReservation(rp, reservationsUrl){
    let options = {
        method: 'POST',
        uri: `${reservationsUrl}/reservations`,
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

    let funcResp = {
        errorWasCaught:false,
        errorCaught:null,
        response:null
    }

    try{
        funcResp.response = await rp(options);
     } catch (exception){
        errorCaught=exception;
        errorWasCaught=true;
    }
    
    return funcResp;
}

module.exports.getSingleReservation = async function getSingleReservation(rp, reservationsUrl, create){
    var options = {
        uri: `${reservationsUrl}/reservations/${create}`,
        headers:{
        },
    };

    let funcResp = {
        errorWasCaught:false,
        errorCaught:null
    }

    try{
        var response = await rp(options);
     } catch (exception){
        funcResp.errorCaught=exception;
        funcResp.errorWasCaught=true;
    }

    return funcResp;
}