import React, { useState, useEffect } from "react";
import api from "./services/api";
import Header from "./components/Header";

import "./App.css";

// import backgroundimage from "./assets/setup.jpg";

function App() {
  // useState return an array with 2 positions
  // 1. Variable with its initial value
  // 2. Function to update its value
  const [projects, setProjects] = useState([]);

  // Calls a function every time whats passed inside the array on the second arg
  // Dependencies array
  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // projects.push(`Teste de botão ${Date.now()}`);
    // projects cannot be altered
    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    const response = await api.post("projects", {
      title: `Totoro ${Date.now()}`,
      owner: "Hayao Miyazaki",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="GHIBLI" />

      {/* <img src={backgroundimage} /> */}
      <div>
        <button class="button buttonBlack" onClick={handleAddProject}>
          Add project
        </button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </>
  );

  // <Header title="Teste" title2="Teste2" />
  /* <Header>
    // Properties can be passed through the component as seen above
    <ul>
      <li>123</li>
      <li>345</li>
      <li>678</li>
    </ul>
  </Header> */

  // Fragments: when you don't wan't the elements to interfeer in your DOM,
  // It will create individual divs without a parent div
  // return (
  //     <>
  //         <Header/>
  //         <Header/>
  //     </>
  // );
}

export default App;
