import React, { useEffect, useState } from "react";
import genreids from "../Utils/data";

const WatchList = ({ addWatch, setAddWatch,removeFromWatchList }) => {
  let [search, setSearch] = useState("");
  let [genres, setgenre] = useState(["All Genres"]);
  let [currGenre, setCurrGenre] = useState("All Genres");
  let handlesearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilterGenres = (genre) => {
    setCurrGenre(genre);
  };

  let handleIncreasing = () => {
    let res1 = addWatch.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setAddWatch([...res1]);
  };

  useEffect(() => {
    let temp = addWatch.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setgenre(["All Genres", ...temp]);
    
    
    console.log(temp);
  }, [addWatch]);

  let handleDecreasing = () => {
    let res2 = addWatch.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setAddWatch([...res2]);
  };
  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-5">
        {genres.map((genre) => {
          return (
            <div
              onClick={() => handleFilterGenres(genre)}
              className={
                currGenre === genre
                  ? "flex justify-center items-center cursor-pointer rounded-lg text-white font-bold w-[8rem] h-[3rem] bg-blue-400"
                  : "flex justify-center items-center cursor-pointer rounded-lg text-white font-bold w-[8rem] h-[3rem] bg-gray-400/60"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="search flex justify-center mt-4">
        <input
          onChange={handlesearch}
          className="bg-gray-200 h-[3rem] w-[18rem] px-3 outline-none rounded-md"
          type="text"
          name=""
          id=""
          value={search}
          placeholder="Search Movies.."
        />
      </div>
      <div className="border border-gray-200 m-8">
        <table className="w-full text-center text-gray-500">
          <thead className="border-b-2">
            <th>Name</th>
            <th className="flex gap-4 justify-center">
              <div>
                <i
                  onClick={handleIncreasing}
                  className="fa-solid fa-arrow-up"
                ></i>
              </div>
              <div>Ratings</div>
              <div>
                <i
                  onClick={handleDecreasing}
                  className="fa-solid fa-arrow-down"
                ></i>
              </div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
          </thead>
          <tbody className="border-b-2">
            {addWatch.filter((moviObj)=>{
              if(currGenre==="All Genres"){
                return true;
              }
              else{
                return genreids[moviObj.genre_ids[0]]===currGenre;
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((moviObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-5 py-4">
                      <img
                        className="w-[6rem] h-[6rem] object-cover"
                        src={`https://image.tmdb.org/t/p/original/${
                          moviObj.poster_path || moviObj.backdrop_path
                        }`}
                        alt=""
                      />
                      <div className="mx-5">{moviObj.title}</div>
                    </td>
                    <td>{moviObj.vote_average}</td>
                    <td>{moviObj.popularity}</td>
                    <td>{genreids[moviObj.genre_ids[0]]}</td>
                    <td  className="text-red-600 font-semibold cursor-pointer"
                    onClick={()=>removeFromWatchList(moviObj)}
                    >Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
