import React, {useEffect} from "react";
import tmdb from "./Tmdb"; 

export default () =>{

useEffect(()=>{
    const loadAll = async () =>{
let list =await tmdb.getHomeList();
setMovieList(list)

    }
    loadAll();
},[]);


return(


    <div className="page">

        
    </div>
);



}