# Movie-shop Api Backend & FrontEnd

This README would normally document whatever steps are necessary to get the
application up and running.

# Movie-Shop Backend


To get started, run:

```console

$ bundle install
$ rails db:migrate db:seed
$ rail s
```

- rail s opens the server
- Test your Api through postman

Incase the db didn't migrate nor seed correctly, run:
```console
$ rails db:reset
```

## Main EndPoints | Routes

- `GET /movies` : *View all Movies*
- `GET /movies/[:id]` : *View a Movie*
- `POST /movies` : *Create new Movie*
- `PATCH /movie/[:id]` : *Update a movie*
- `DELETE /movie/[:id]` : *Delete a movie*



# Movie-Shop Client
Build with react js

Created  through : `npx create-react-app --use-npm `

Styled Mostly using : `Tailwind css`,  [Check configuration](https://tailwindcss.com/docs/guides/create-react-app)

- [How to proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

To get Started frontend, run:

```console
$ npm install
$ npm start --prefix movie-shop
```

or cd into movie-shop and run:
```console
$ npm install
$ npm start
```

- This will open on ``` PORT 4000 ```
