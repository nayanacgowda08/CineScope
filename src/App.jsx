import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";

const App = () => {

  let [addWatch,setAddWatch]=useState([]);
  // let [removeWatch,setRemoveWatch]=useState([]);
  const handleAddToWatchList = (elem)=>{
    let newWatchList = [...addWatch,elem];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setAddWatch(newWatchList)
    // console.log(addWatch);
    
  }

  const removeFromWatchList=(elem)=>{
    let filteredWatchList = addWatch.filter((movie)=>{
      return movie.id!== elem.id;
    })
    setAddWatch(filteredWatchList)
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))
    // console.log(filteredWatchList);
    
  }

  useEffect(()=>{
    let moviesLocalstorage =localStorage.getItem('moviesApp')
    if(moviesLocalstorage){
      let moviesFromLocal = JSON.parse(moviesLocalstorage);
      setAddWatch(moviesFromLocal);
    }
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* Your other routes go here */}

        <Routes>
          <Route path="/" element={<><Banner   /> <Movies addWatch={addWatch}
          handleAddToWatchList={handleAddToWatchList} removeFromWatchList={removeFromWatchList} /> </>} />
          <Route path="/watchlist" element={  <WatchList addWatch={addWatch} setAddWatch={setAddWatch} removeFromWatchList={removeFromWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
