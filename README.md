# QR Selling Demo

This is a demo NextJS application that shows a Live Sell application that uses Amazon IVS, and supports adding QR codes and images to the video in real-time.

For demo purposes the application publish to one Amazon IVS Channel, which is set through public NextJS environment variables. This is NOT recommended for a production application, in such a case the logic should be move to a server side application.

## Known Issues:

-   Loading the player before starting the stream throws an error.

# NextJS Template Info

This is a template front end repository to use as base or inspiration for new development projects. It intents to follow clean architecture.

For these examples, we chose to use our preferred [React](https://reactjs.org/) framework [Next.js](https://nextjs.org/), but the whole point of this architecture is to be able to use it independently of the frameworks and libraries used (external dependencies).

In order to have a basic example, we chose a simple subject: a todo list!

To see the tasks that still need to be done on the project, go to the /docs/todo.md file

If you have any questions, suggestions or anything else, you can contact me @ alberto@webrtc.ventures!

## Summary

1. [Getting started](#getting-started)
2. [Clean architecture](#clean-architecture)
    1. [Use case](#use-case)
    2. [Primary port](#primary-port)
    3. [Primary adapter](#primary-adapter)
    4. [Secondary port](#secondary-port)
    5. [Secondary adapter](#secondary-adapter)
3. [Resources](#resources)

## Background

**Linting**

We use this tool to analyze source code to flag programming errors, bugs, stylistic errors and suspicious constructs. We generally recommend following [airbnb](https://airbnb.io/javascript/) simplistic style guide.

**Prettier**

In the file .prettierrc we will define style related rules.
Prettier does nothing to help with code-quality rules. They are also the most important ones provided by linters as they are likely to catch real bugs with your code!

**Testing**

In this example we are using jest...TBC

## Getting started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

--

To start unit tests:

```bash
jest
```

--

### Starting with Docker

Go to the directory that has your Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

```
docker build . -t <your username>/frontend-template
```

Run the image you previously built:

```
docker run -p 3000:3000 -d <your username>/frontend-template
```

### To try the app online

[https://webrtc-template.herokuapp.com](https://webrtc-template.herokuapp.com/)

## Clean architecture

The hexagonal architecture, or architecture based on ports and adapters, is an architectural pattern used in the field of software design. It aims to create systems based on application components which are loosely coupled and which can be easily connected to their software environment by means of ports and adapters. These components are modular and interchangeable, which reinforces the consistency of processing and facilitates the automation of tests.

There are three parts in the clean architecture: the application part (the primary ports and adapters), the domain (the use cases, the domain models, etc.) and the infrastructure part (the secondary ports and adapters).

This architecture is based on the port / adapter pattern and the dependency inversion principle.

_By documenting you on clean architecture (or hexagonal architecture). You will find different names for these parts. The names chosen here are personal, the goal being that they are understandable._

### Use case

The uses cases define the actions of your users. The goal is not to use any framework or libraries in these elements (in order to keep a logic not coupled to these tools).

On the front, they can be represented by function, by class written in JS or TS. With React, it is possible to use redux for this part.

In case redux is used, the actions are the use-cases, the state is one of the models, and the selectors are used to map.

### Primary port

The primary port is used to establish a contract between the primary adapter and the use cases. For this, an interface can be created. In practice, the use case is also considered a primary port.

### Primary adapter

Then, the implementation of these interfaces are used to dialogue with the domain: the first is what we call the primary adapters. Their goal is to trigger the execution of use cases. For example on the front, these adapters can be the React components that perform triggers an action (redux or not).

### Secondary port

The secondary port is used to establish a contract between the secondary adapter and the use cases. For this, we usually create an interface. This interface is used directly in the use case.

_Tips: you can use dependency injection for that, some state management libraries allow you to do that. For example with [redux-thunk](https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument) and [redux-observable](https://redux-observable.js.org/docs/recipes/InjectingDependenciesIntoEpics.html) it is possible to pass "extraArguments" which will be directly available in the redux actions. In "vanilla", there is also [InversifyJS](https://github.com/inversify/InversifyJS)._

### Secondary adapter

The second implementation of interfaces (ports) is called secondary adapters. They are called by the use cases. For example in front, these adapters can be the HTTP requests, the access to the data present in the local-storage, etc.

## Resources

-   [Hexagonal architecture by Alistair Cockburn](https://alistair.cockburn.us/hexagonal-architecture/)

## Credit

Application was originally based on: https://github.com/dimitridumont/clean-architecture-front-end
