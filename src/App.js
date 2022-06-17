import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow.js";
import './App.css';
import FeaturedMoveie from "./components/FeaturedMoveie.js";




export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData ] = useState(null);


  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      


    }
    loadAll()
  },[]);
  return (
    <div className="page">
        {featuredData &&   <FeaturedMoveie item={featuredData}/>
        
        }
      
    <section className="lists">
    {movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items}/>
    ))}
</section>
</div>
  );
}