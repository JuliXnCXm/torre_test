import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";

const IndexRouter = () => {
    return (
      <Routes>
        <Route path="/torre_test/" element={<Home />} />
        <Route path="/torre_test/user/:username" element={<UserProfile />} />
      </Routes>
    );
}

export default IndexRouter;
