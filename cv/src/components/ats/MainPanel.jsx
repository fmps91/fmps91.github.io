// MainPanel.jsx
import React from 'react';
import './MainPanel.css';

const MainPanel = ({ data, leng, type }) => {
  
  return (
    <div className="main-panel">
      <header className="header">
        <h1 >{data['' + leng]["perfil"]["nombre"]}</h1>
        <p className="title">{data['' + leng]["perfil"]["rol"]}</p>
        <div className="contact-info">
          <span>📧 {data['' + leng]["redes"]["correo"]}</span>
          {/* <span>📞 +34 600 123 456</span>
          <span>📍 Madrid, España</span> */}
          <span>🐙 {data['' + leng]["redes"]["github"]}</span>
          <span>🔗 {data['' + leng]["redes"]["linkeding"]}</span>
        </div>
      </header>

      <section className="section">
        <h2>{type["perfil"]}</h2>
        <p>
          {data['' + leng]["carrera"]["descripción"]}
        </p>
      </section>

      <section className="section">
        <h2 >{type["experiencias"]}</h2>

        <div className="experience-item">
          {data['' + leng]["experiencias"].map((v, e) => {
            return (
              <div key={e} id={e} className='experience-header' style={{ marginTop: "0px" }}>
                <h3>{v['rol']}</h3>
                <p className="company">{v['nombre']}</p>
                <p className="date">{v['duración']}</p>
                <ul style={{ marginTop: "10px" }}>
                  {v["actividades"].map((v1, e1) => {
                    return (
                      <li key={e1} id={e1} >
                        {v1}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <h2>{type["proyectos"]}</h2>
        {data['' + leng]["proyectos"]["lista"].map((v, e) => {
          return (
            <div key={e} id={e} className="project-item">
              <h3>{v['nombre']}</h3>
              <p className="description">{v['descripción']}</p>
              <a className="tech" href={v['link']}>link</a>
            </div>
          )
        })}
      </section>

      <section className="section">
        <h2>{type["educación"]}</h2>
        {data['' + leng]["educación"].map((v, e) => {
          return (
            <div key={e} id={e} className="education-item">
              <h3>{v['titulo']}</h3>
              <p className="institution">{v['instituto']}</p>
              <p className="date">{v['duración']}</p>
            </div>
          )
        })}
      </section>

      <section className="section">
        <h2>{type["habilidades"]}</h2>
        <div className="skills-list">
          <ul>
          {data['' + leng]["habilidades"].map((v, e) => {
          return (
            <li key={e} id={e} className="skill">{v['nombre']}</li>
          )
        })}
        </ul>
        </div>
      </section>
    </div>
  );
};

export default MainPanel;