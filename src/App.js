import React from "react";
import "./App.css";
import SystemInputs from "./Components/SystemInputs";
import ProductsTable from "./Components/ProductsTable";

function App() {
  return (
    <div className="App pt-4">
      <div className="container">
        <h2 className="text-center mb-5">CRUDS</h2>
        <SystemInputs/>
        <ProductsTable/>
      </div>
    </div>
  );
}

export default App;
