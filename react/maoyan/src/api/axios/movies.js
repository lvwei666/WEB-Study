import $axios from './axios';
import { URL } from './config';

export function getMovies () {
  return $axios().get(URL.movies)
}

export function getMovies2 () {
  return $axios().get(URL.movies2)
}

export function getMovies3 () {
  return $axios().get(URL.movies3)
}

export function movieDetail () {
  return $axios().get(URL.movieDetails)
}
