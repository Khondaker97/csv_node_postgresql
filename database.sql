CREATE DATABASE onito;

CREATE TABLE movies(
    tconst VARCHAR PRIMARY KEY NOT NULL,
    titleType VARCHAR(100) NOT NULL,
    primaryTitle VARCHAR(200) NOT NULL,
    runtimeMinutes INT NOT NULL,
    genres VARCHAR(100) NOT NULL
);

INSERT INTO movies(tconst, titleType, primaryTitle, runtimeMinutes, genres) 
VALUES(tconst, titleType, primaryTitle, runtimeMinutes, genres);

CREATE TABLE ratings(
    tconst VARCHAR NOT NULL REFERENCES movies(tconst),
    averageRating DECIMAL NOT NULL,
    numVotes INT NOT NULL
);

INSERT INTO movies(tconst, averageRating, numVotes)
VALUES(tconst, averageRating, numVotes);

SELECT * from movies ORDER BY runtimeMinutes DESC LIMIT 10;

INSERT INTO movies(tconst, titleType, primaryTitle, runtimeMinutes, genres) VALUES(c1, c2, c2, c4, c5);

SELECT m.tconst, primaryTitle,genres, averageRating From movies as m
INNER JOIN ratings ON m.tconst = ratings.tconst 
WHERE averageRating > 6.0 ORDER BY averageRating DESC;