import React from "react";
import "./header.css";

    export default ({preto}) => {
  return (
    <header className={preto ? 'preto' : ''}>
      <div className="header--logo">
        <h1>Telaflix</h1>
      </div>
      <div className="header--user">
        <a href="https://github.com/JuniorRodrigu"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="usuario"></img></a>
      </div>
    </header>
  );
};
