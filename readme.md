# cd into folder

1.  run - npm install

# USED

- express js
- fast-csv for parsing
- cors to set cors policy
- pg for POSTGRES DB
- nodemon for continuously running server on save changes

# cd into config

First set your credentials

- user, database, password must

### To parse csv file

1.  set password into credentials directly first(without using env)
2.  run once - npm run parse

Note: csvParse.js isn't attached to index file because it will every time then. After parsing you can set password through .env

### All raw can be observed at database.sql

### run in development

```
npm run dev
```

# Queries

get all movies testing

- /api/v1/all-movies

get top 10

- /api/v1/longest-duration-movies

post a new movie

- /api/v1/new-movie

get top rated movies

- /api/v1/top-rated-movies

### Backend is deployed at RAILWAY

- https://onito.up.railway.app/

You can play with it. Thanks.
