import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import UserProfile from "../pages/UserProfile";

const IndexRouter = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    );
}

export default IndexRouter;
