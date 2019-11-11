'use strict';

module.exports.hello = async function(event) {
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

