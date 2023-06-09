# Stage 2 - Ship Everywhere

## Dependencies
- [Docker](https://www.docker.com/)

## Background

A customer has been struggling with environment drift for a long time. Each environment they maintain has different dependencies installed on long-living servers, which can occasionally cause nasty dependency bugs that are incredibly hard to debug and often sit outside the software development lifecycle (SLDC).
The customer has engaged ClearRoute to move their applications toward immutable infrastructure and adopt containers for their applications.

## Test
Please write a Dockerfile for one of the app examples.

Assume the app needs to have the [awscli](https://aws.amazon.com/cli) installed and the required environment variables run the awscli.


Once complete, please include a screenshot of the terminal with the application running and send ClearRoute the url to your repository to review. 


### Notes
- You may consider using Container Orchestration for database dependencies but this is not required.
- Take into consideration Dockerfile best practice where possible.


