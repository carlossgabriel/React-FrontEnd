import React from "react";

import Header from "./components/Header";

function App() {
  return (
    // Properties can be passed through the component as seen above
    <div>
      <Header title="Teste" title2="Teste2" />
      <Header>
        <ul>
          <li>123</li>
          <li>345</li>
          <li>678</li>
        </ul>
      </Header>
    </div>
  );

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
