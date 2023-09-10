import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Card />
    </div>
  );
}

function Card() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.";
  return (
    <div className="card">
      <Photo />
      <p className="name">Najmuddin Habib</p>
      <p className="description">{lorem}</p>
      <TechnologiesList />
    </div>
  );
}

function TechnologiesList() {
  return (
    <div className="technologies-list">
      <Technologies tech="HTML+CSS " icon="fa-brands fa-css3-alt" icon2="fa-brands fa-html5" bgcolor="yellow"
      />
      <Technologies tech="Javascript " icon="fa-brands fa-js" bgcolor="orange"
      />
      <Technologies tech="React " icon="fa-brands fa-react" bgcolor="aqua"
      />
      <Technologies tech="Git and GitHub " icon="fa-brands fa-square-github" bgcolor="white"
      />
    </div>
  );
}

function Technologies(props) {
  return (
    <div className="technologies" style={{ backgroundColor: props.bgcolor }}>
      <span>{props.tech}</span>
      <span>
        <i class={props.icon}></i>
        <i class={props.icon2}></i>
      </span>
    </div>
  );
}

function Photo() {
  return (
    <div className="image">
      <img src="SALOON.jpeg" alt="info"></img>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
