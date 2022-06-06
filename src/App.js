import React, { useEffect, useState } from "react";
import tmdb from "./Tmdb";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [movieList, setMovieList] = useState([]);


    useEffect(() => {
        const loadAll = async () => {
            let list = await tmdb.getHomeList();
            setMovieList(list);


        }
        loadAll();
    }, []);


    return (


        <div className="page">
            <section className="lista">
                {movieList.map((item, key)=> (
                    <div>
                        {item.title}
                    </div>

                ))}
            </section>




        </div>
    );



}