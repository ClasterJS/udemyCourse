"use strict";
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", ""),
  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

for (let i = 1; i <= 2; i++) {
  let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
    ratingFilm = prompt("На сколько оцените его?", "");
  if (
    lastFilm.length == 0 ||
    lastFilm.length > 50 ||
    lastFilm == null ||
    ratingFilm == null ||
    ratingFilm.length == 0
  ) {
    console.log("Error");
    i--;
  } else {
    console.log("Done");
    personalMovieDB.movies[lastFilm] = ratingFilm;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
