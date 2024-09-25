import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
const Movies = ({ handleAddToWatchList, removeFromWatchList,addWatch }) => {
  let [movie, setMovie] = useState([]);
  let [pageNo, setPageNo] = useState(1);
  let fetchApi = async () => {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=6e666ee79bdd17bbfcacef903a2735dd&language=en-US&page=${pageNo}`
    );
    setMovie(res.data.results);
    console.log(res.data.results);
  };

  const prevPage = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const nextPage = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    fetchApi();
  }, [pageNo]);
  return (
    <>
      <div className="moviee p-5">
        <h1 className="text-center text-2xl p-4 font-semibold">
          Trending Movies
        </h1>
        <div className="flex flex-wrap justify-evenly gap-8 ">
          {movie.map((elem, ind) => {
            return (
              <MovieCard
                elem={elem}
                key={ind}
                poster_path={elem.poster_path}
                title={elem.original_title}
                handleAddToWatchList={handleAddToWatchList}
                removeFromWatchList={removeFromWatchList}
                addWatch={addWatch}
              />
            );
          })}
        </div>
        <Pagination pageNo={pageNo} nextPage={nextPage} prevPage={prevPage} />
      </div>
    </>
  );
};

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=6e666ee79bdd17bbfcacef903a2735dd&language=en-US&page=1
