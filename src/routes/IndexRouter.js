import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import Home from "../pages/Home";

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<UserProfile/>}/>
        </Routes>
    )
}

export default IndexRouter;
