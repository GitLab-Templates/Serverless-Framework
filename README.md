# gitlab-serverless-framework

An example project of deploying a AWS Lambda function + API Gateway using Serverless Framework and gitlab-ci

### Quickstart

1. Clone this repo.
1. Setup your own Gitlab project
1. In the new Gitlab project, set the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` variables in the Gitlab CI/CD settings.
1. `git push` to your new Gitlab project.
1. The API Gateway url should be viewable in the build stage logs.