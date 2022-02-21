import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nft from "./Nft";


export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nft />} />
        </Routes>
      </Router>
    </div>
  );
}
