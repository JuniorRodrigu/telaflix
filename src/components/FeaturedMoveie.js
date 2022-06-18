import React from "react";
import './FeaturedMoveie.css';

export default ({item}) =>{

    let dataAno = new Date(item.first_air_date);

    let generos = [];
    for (let i in item.genres){
        generos.push(item.genres[i].name);
    }


    return(
        
        <section className="featured"  style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
           
            <div className="featured--vertical">
           
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                    <div className="featured--pointe">{item.vote_average} Pontos</div>
                    <div className="featured--year">{dataAno.getFullYear()}</div>
                    <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's': ''} </div>
                    </div>
                    <div className="featured--description">{item.overview}</div>

                    <div className="featured--buttons">
<a href={`/whatch/${item.id}`} className="featured--btbranco" >▷ Assistir</a>
<a href={`/whatch/${item.id}`}className="featured--btpreto" >+ Minha Lista</a>

                    </div>


                    <div className="featured--genres"><strong>Generos </strong>{generos.join(', ')}</div>
                </div>
            </div>
        </section>
        
    )
}