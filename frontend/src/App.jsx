import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Table from "./components/Table";

const App = () => {
  const [grid, setGrid] = useState(false);
  return (
    <div className="">
      <Navbar />
      {grid ? <div>grid value</div> : <Table />}
    </div>
  );
};

export default App;
