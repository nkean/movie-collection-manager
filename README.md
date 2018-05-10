# movie-collection-manager
Weekend 5 - Extended Challenge: Movie Collection Manager

# Setting Up SQL Database
Start by creating a Postgresql database called movie_collection and use the commands below to create the required tables

```sql
CREATE TABLE "movies" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(128) NOT NULL,
	"release_date" DATE,
	"run_time" INT,
	"image_url" VARCHAR(128),
	"genre_id" INT NOT NULL
);

CREATE TABLE "genres" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(32) NOT NULL
);
```