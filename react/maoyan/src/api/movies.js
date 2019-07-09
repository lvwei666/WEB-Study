import $axios from './axios';
import { URL } from './config';

export function getMovies () {
  return $axios().get(URL.movies)
}