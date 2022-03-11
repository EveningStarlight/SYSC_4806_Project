# SYSC_4806_Project Mini-Monkey Survey

Languages Used: JavaScript, HTML, CSS

How to run / use:
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

Further behind then we wanted, our scope was to big for this milestone, to many usecases where attempted

## Plan for the next sprint:

Get all the base use cases implemented:

    - Writting Surevys to the backend
    - Saving Answers to the backend
    - The ability to select what survey you want to answer
    - The ability to see the answers to your survey

Look into a different backend solution

## Diagrams & Schemas

UML class diagram of Models

![UML Class Diagram](/docs/Diagrams/ClassDiagram.jpg)

Up-to-date schema of the database

We have decided to go with a JSON file for our backend right now
-every survey is a item in the file which has sub items for questions
-each survey item has an array of answers which gets an array of all the answers per question
