import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Table from "./components/Table";
import useNavStore from "./store/navbarStore";

const App = () => {
  const {grid}  = useNavStore();
  return (
    <div className="">
      <Navbar />
      {grid ==='grid' ? <div>grid value</div> : <Table />}
    </div>
  );
};

export default App;
