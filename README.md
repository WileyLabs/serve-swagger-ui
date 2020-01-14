# Serve Swagger UI

This little command line tool allows you to serve the current directory's
contents (which are presumably Swagger or OpenAPI docs in either YAML or JSON)
alongside [swagger-ui](https://github.com/swagger-api/swagger-ui).

You can use the location bar in the app next to the "Explore" button and input
the name of a local file (i.e. `api.yaml`) to load that file (via it's relative
localhost URL) into Swagger UI.

Click "Explore" and you should see the documentation of your API loaded below.

## Usage

```
$ npm i -g serve-swagger-ui
$ serve-swagger-ui
```

Or if you need a custom directory and/or port number:
```
serve-swagger-ui api/ -p 2020
```

## Docker

To use it as a Docker container:

```
$ docker build -t serve-swagger-ui .
```

Now you can serve files from your local folder:

```
$ docker run -it -v $PWD:/specs -p 3000:3000 serve-swagger-ui
```

## License

MIT
