import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [github_username, setGithub_username] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithub_username("");
    setTechs("");
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
              name="github_username"
              id="github_username"
              required
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              value={techs}
              onChange={e => setTechs(e.target.value)}
              name="techs"
              id="techs"
              required
            />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="Longitude">Longitude</label>
              <input
                type="number"
                name="Longitude"
                id="Longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/23368031?s=300&v=4"
                alt="Marlon Paulon da Silva"
              />
              <div className="user-info">
                <strong>Marlon Paulo da Silva</strong>
                <span>Flutter, ReactJS</span>
              </div>
            </header>
            <p>
              Criador de Soluções 🚀 utilizando as melhores tecnologias de
              desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/Marlon-Paulo-da-Silva">
              Acessar o perfil do github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/23368031?s=300&v=4"
                alt="Marlon Paulon da Silva"
              />
              <div className="user-info">
                <strong>Marlon Paulo da Silva</strong>
                <span>Flutter, ReactJS</span>
              </div>
            </header>
            <p>
              Criador de Soluções 🚀 utilizando as melhores tecnologias de
              desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/Marlon-Paulo-da-Silva">
              Acessar o perfil do github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/23368031?s=300&v=4"
                alt="Marlon Paulon da Silva"
              />
              <div className="user-info">
                <strong>Marlon Paulo da Silva</strong>
                <span>Flutter, ReactJS</span>
              </div>
            </header>
            <p>
              Criador de Soluções 🚀 utilizando as melhores tecnologias de
              desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/Marlon-Paulo-da-Silva">
              Acessar o perfil do github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/23368031?s=300&v=4"
                alt="Marlon Paulon da Silva"
              />
              <div className="user-info">
                <strong>Marlon Paulo da Silva</strong>
                <span>Flutter, ReactJS</span>
              </div>
            </header>
            <p>
              Criador de Soluções 🚀 utilizando as melhores tecnologias de
              desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/Marlon-Paulo-da-Silva">
              Acessar o perfil do github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
