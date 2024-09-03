import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getgeneres, getMovies } from "./redux/movieSlice";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";

export default function Home() {
  const dispatch = useDispatch();
  const movieData = useSelector((state) =>
    state?.movieData?.results?.slice(0,4)
  );

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getgeneres());
  }, []);
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Navbar />
        <div className="d-flex  row ps-3 w-100">
          {movieData?.map((movie) => {
            return <div className=" col-md-3"><MovieCard key={movie.title} movie={movie} /></div>
          })}
        </div>
      </div>
    </div>
  );
}
