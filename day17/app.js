const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0abb46c614b913a89790644bcf8bbea0&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

let moviesArr = [];

const getMovies = async () => {
  await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => displayData(data));
};

const displayData = (data) => {
  let movies = "";
  for (let movie of data.results) {
    movies += `<div key=${movie.id} class="movie-box">
        <img
          src=${IMG_PATH + movie.backdrop_path}
          alt="movie-img"
        />
        <div class="movie-detail">
            <h3>${movie.title}</h3>
            <p class="rating">${movie.vote_average}</p>
        </div>
        <div class="overview">
          <h4>Overview</h4>
          <p>
            ${movie.overview}
          </p>
        </div>
      </div>`;
  }

  document.querySelector(".row").innerHTML = movies;
};

getMovies();
