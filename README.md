
# Serverless Framework with JavaScript

---

Example project using the [Serverless Framework](https://serverless.com), JavaScript, AWS Lambda, AWS API Gateway and GitLab Pages.

---

## Deployment

### Setting Up AWS

1. Create AWS credentials including the following IAM policies: `AWSLambdaFullAccess`, `AmazonAPIGatewayAdministrator` and `AWSCloudFormationFullAccess`.
1. Set the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` variables in the GitLab CI/CD settings. `Settings > CI/CD > Variables`.  

## Development

### Running Locally

Install dependencies with:

```
npm install
```

Run backend server with:

```
npm start
```

This runs the serverless function locally using `serverless-offline` plugin.

Run frontend with:

``` 
npm run pages
```

The frontend should be available at `http://localhost:8080`

### Running Tests
```
npm test
```

## Additional information

### Getting the Endpoint URL

This project is setup with the `serverless-stack-output plugin` which is configured to output a JSON file to `./stack.json`. See [this github repo](https://github.com/sbstjn/serverless-stack-output) for more details.

