# gitlab-serverless-framework

An example project of deploying a AWS Lambda function + API Gateway using Serverless Framework and gitlab-ci

### Quickstart

1. Clone this repo.
1. Setup your own project on GitLab project and make sure the git remote origin url is set correctly.
1. In the new GitLab project, set the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` variables in the GitLab CI/CD settings. `Settings > CI/CD > Variables`.  
1. `git push` to your new GitLab project.
1. The API Gateway url should be viewable in the build stage logs.