import React from "react";
// import WatchList from "./WatchList";

const MovieCard = ({poster_path,title,handleAddToWatchList,elem,removeFromWatchList,addWatch}) => {

  function doesContain(elem){
    for(let i=0;i<addWatch.length;i++){
     if( addWatch[i].id === elem.id){
      return true;
     } 
    }
    return false;
  }
  // console.log(doesContain(elem));
  
  
  return (
    <>
      <div
        className="movie-card h-[40vh]  w-[200px] bg-no-repeat bg-cover bg-center rounded-xl hover:cursor-pointer
          hover:scale-110 duration-300  overflow-hidden flex flex-col justify-between items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path
          })`,
        }}
        
      >

        {doesContain(elem) ? <div  onClick={()=>removeFromWatchList(elem)}
        className="m-4 flex justify-center bg-gray-800/80 p rounded-md w-8 h-8 items-center"
        >&#10060;</div>
        :<div onClick={()=>(handleAddToWatchList(elem))}
         className="m-4 flex justify-center bg-gray-800/80 p rounded-md w-8 h-8 items-center"
        >&#128525;</div>}
     
        <div className="text-white text-center w-full bg-gray-900/60 font-semibold text-lg"
        >{title}</div>
      </div>
    </>
  );
};

export default MovieCard;
