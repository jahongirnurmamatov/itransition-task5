import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Table from "./components/Table";
import useNavStore from "./store/navbarStore";
import GridView from "./components/GridView";

const App = () => {
  const {grid}  = useNavStore();
  return (
    <div className="">
      <Navbar />
      {grid ==='grid' ? <GridView />: <Table />}
    </div>
  );
};

export default App;
