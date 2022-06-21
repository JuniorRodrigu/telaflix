import React, { useState } from "react";

import "./header.css";
function handleInputChange() {
const handleInputChange = (e) => {
  e.preventDefault();
      console.log(e.target.velue);
};
}
    export default ({preto}) => {
      
     
  return (
    <header className={preto ? 'preto' : ''}>
      <div className="header--logo">
        <h1>Telaflix</h1>

      </div>
      <div className="busc"><input name="sercha" id="sercha" placeholder="buscar filmes..." onChange={handleInputChange}/></div>
      <div className="header--user">
   

        <a href="https://github.com/JuniorRodrigu"><img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-rouge.png" alt="usuario"></img></a>
      </div>
    </header>
  );
};
