'use strict';

module.exports.hello = async function(event, context) {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Your function executed successfully!',
        params: event.queryStringParameters
      },
      null,
      2
    ),
  };
};

