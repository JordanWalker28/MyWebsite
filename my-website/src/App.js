 
// App.js
import Navbar from "./components/Navbar";
import "./styles.css";
import React from "react"

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
      </div>
    </div>
  );
}
