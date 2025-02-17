export const MOVIE_LIST_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDFmMzY4NjY5NTQxMTJhYTQ2MDE3NTcwMjVhZWVhZSIsIm5iZiI6MTczOTU0OTM5Ny43OTIsInN1YiI6IjY3YWY2YWQ1ZjEyY2VjNmUzMDFjYzk3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qcAc6R8-1mXMXPwDcWX1yJkgUoze--R-dHnj8Efc2XA",
  },
};
