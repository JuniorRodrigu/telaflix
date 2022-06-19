import React from "react";
import "./header.css";

    export default ({preto}) => {
  return (
    <header className={preto ? 'preto' : ''}>
      <div className="header--logo">
        <h1>Telaflix</h1>
      </div>
      <div className="header--user">
        <a href="https://github.com/JuniorRodrigu"><img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-rouge.png" alt="usuario"></img></a>
      </div>
    </header>
  );
};
