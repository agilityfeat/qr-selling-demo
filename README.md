# QR Selling Demo

This is a demo NextJS application that shows a Live Sell application that uses Amazon IVS, and supports adding QR codes and images to the video in real-time.

For demo purposes the application publish to one Amazon IVS Channel and Chat room, which are set through public NextJS environment variables. This is NOT recommended for a production application, instead such a logic should be move to a server side application.

## How to Run the Application:

1. Clone the repo.
2. Install dependencies: `yarn install`.
3. In the Amazon IVS console, create both a Channel and a Chat room. Note following values:
    - Amazon IVS Channel Ingest Server, Stream Key and Playback URL
    - Amazon IVS Chat Room Messaging Endpoint and two Chat Tokens (one for the seller and another one for buyer user)
4. Add the values got from Amazon IVS console to the `.env.local` file.
5. Run the application: `yarn dev`.

## Known Issues:

-   Loading the player before starting the stream throws an error.

# NextJS

For these examples, we chose to use our preferred [React](https://reactjs.org/) framework [Next.js](https://nextjs.org/), but the whole point of this architecture is to be able to use it independently of the frameworks and libraries used (external dependencies).

## Background

**Linting**

We use this tool to analyze source code to flag programming errors, bugs, stylistic errors and suspicious constructs. We generally recommend following [airbnb](https://airbnb.io/javascript/) simplistic style guide.

_Note: If you are running things for the first time and are getting an error with the automatic linting process triggered when you commit, try `yarn upgrade`_

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

_TBC_ [https://webrtc-template.herokuapp.com](https://webrtc-template.herokuapp.com/)
