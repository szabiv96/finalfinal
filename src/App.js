import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Artworks from './pages/Artworks';
import Navigation from './components/Navigation';
import FavouritePics from './pages/FavouritePics';
import React, { useState, useEffect } from 'react';


function App() {
  const [perPage, setPerPage] = useState(100);
    const apiKey = "ac3cc164-cd23-4a7e-8d4e-7dd367deafb5";
    const [artpieces, setArtpieces] = useState([]);

    useEffect(() => {
        fetch(`https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=${perPage}`)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setArtpieces(data.records);
                }, 1000);
            });
    }, [perPage]);

    //props what passed away to components
    console.log(artpieces);
    const [search, setSearch] = useState('');
    let favPics = [];


  return (
    <>
    {/* navigation are here */}
    <Navigation artpieces={artpieces} setSearch={setSearch} search={search}></Navigation>
    {/* navigation are here and stays here while different pages are routed */}


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favouritePics' element={<FavouritePics  favPics={favPics}/>} />
      <Route path='/artworks' element={<Artworks artpieces={artpieces} search={search} favPics={favPics} />}/>
    </Routes>
    </>
  );
}

export default App;
