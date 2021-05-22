import React from "react";

// You can destructure the props passed to the component
// To access the content passed by the App, use the props children
export default function Header({ title, title2, children }) {
  return (
    <header>
      <h1>{title}</h1>
      {children}
      {/* <h1>{title2}</h1>
      <h1>Teste 3</h1> */}
    </header>
  );
}
