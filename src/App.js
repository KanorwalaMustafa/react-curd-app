import React from "react";
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Create from "./Component/Create/Create";
import Read from './Component/Read/Read';
import Update from "./Component/Update/Update";

function App() {
  return (
    <div>
      <div className="container-fluid-md bg">
        <div className=" heading m-auto d-flex justify-content-between align-items-center">
          <h5 className="fs-5">React Crud Operation</h5>
          <div>
            <Link to='/'>
              <button type="button" className="btn btn-primary mx-1">Create</button>
            </Link>
            <Link to='/Read'>
              <button type="button" className="btn btn-primary mx-1">Read</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        < Routes >
          <Route excat path="/" element={<Create />} />
          <Route path="/Read" element={<Read />} />
          <Route path="/Update" element={<Update />} />
        </Routes >
      </div>
    </div>

  );
}

export default App;

