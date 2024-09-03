import React from "react";
import { useSelector } from "react-redux";

const imagesBaseUrl = "https://image.tmdb.org/t/p/original/";

export default function MovieCard({ movie }) {
  const genreData = useSelector((state) => state?.genres);

  const getDate = (date) => {
    return new Date(date).getFullYear();
  };

  const getGenres = (ids) => {
    return ids?.map((id) => genreData[id]).join(" , ");
  };

  return (
    <div className="card p-2 mt-3 col-lg-3  w-100">
      <img
        src={`${imagesBaseUrl}${movie?.poster_path}`}
        className="card-img-top"
        alt="movie"
        height={300}
      />
      <div className="card-body max-content">
        <h5 className="card-title">{`${movie?.original_title} (${getDate(
          movie?.release_date
        )})`}</h5>
        <div>{getGenres(movie?.genre_ids)}</div>
      </div>
    </div>
  );
}
