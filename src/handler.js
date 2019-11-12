'use strict';

module.exports.hello = async function(event) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
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

