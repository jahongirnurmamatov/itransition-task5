import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Table from "./components/Table";

const App = () => {

  return (
    <div className="text-3xl bg-base-100 ">
      <Navbar />
      <Table />
    </div>
  );
};

export default App;
