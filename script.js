const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?',''),
      personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    ratingFilm = prompt('На сколько оцените его?', ''),
    lastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
    ratingFilm2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = ratingFilm;
personalMovieDB.movies[lastFilm2] = ratingFilm2;

console.log(personalMovieDB);