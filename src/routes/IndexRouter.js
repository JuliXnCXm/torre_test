import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import UserProfile from "../pages/UserProfile";
import Auth from '../pages/Auth'

const IndexRouter = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/auth" element={<Auth/>}/>
        <Route path="*" element={<NotFound />} />
    </Routes>
    );
}

export default IndexRouter;
