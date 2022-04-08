# SYSC_4806_Project Mini-Monkey Survey

Languages Used: JavaScript, HTML

Deployment: https://survey-gorilla.herokuapp.com/

## Development

The application is run using NodeJS, built using React and Chakra

### Running a development build

A local instance of the website can be run using

```shell
npm run start
```

The local instance will be updated on file save, make it easy to edit the website

### Testing the build

The tests can be run using

```shell
npm run test
```

And the code can be formatted to conform to prettier using

```shell
npm run prettier
```

Both of these must pass in order for CircleCI to greenlight a build.

## Current state of the project:

All desired features implemented.

## Diagrams & Schemas

UML class diagram of Models

![UML Class Diagram](/docs/Diagrams/ClassDiagramM3.jpg)

Up-to-date schema of the database

## Back-end

We chose to use a MERN stack (MongoDB, Express, React, NodeJS) for the this project to have our front-end react code connect to a nodejs backend which uses express to make calls to our mongodb database which is running on mongodbs cloud atlas platform. We chose mongodb since it uses a json format for storing data entries which is very easy to manipulate using javascript.
