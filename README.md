# gitlab-serverless-framework

An example project of deploying a AWS Lambda function + API Gateway using Serverless Framework and gitlab-ci

### Testing locally


1. Install dependencies
```
npm install
```
1. Deploy
```
serverless deploy --stage staging
```

### Deploying via Gitlab

1. Clone this repo.
1. Setup `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` variables in the Gitlab CI/CD settings.
1. `git push` to Gitlab
1. The API Gateway url should be viewable in the build stage logs.