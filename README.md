# Streaming data wars

A P5js and Twitter data visualization project.

This project compares two keyboards form the Twitter API stream and makes a real time visualization in your web browser using P5js

The project creates a Webserver using Node and Express and connects the P5js App running in the Webbrowser, with sockets using Sockets.io.

Twit is used to fetch realtime data form the Twitter API stream.

Open the console inspector to see the tweets streamed in real time.

## To run the project:

##1. Clone repository.

##2. Run:

```
npm install.
```

##3. Setup your corresponding API keys from Twitter into:

```
config.js
```

##4. Set keywords to compare in file:

```
 keywords.js
```

##5. run:

```
npm run start
```

##6. Go to in your favorite browser to:

```
localhost:3000
```

Enjoy.

You can add more filter settings, read documentation of Twit at:
https://github.com/ttezel/twit
