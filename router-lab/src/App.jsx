// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="text">
        <AllRoutes />
      </div>
    </>
  );
}
export default App;


