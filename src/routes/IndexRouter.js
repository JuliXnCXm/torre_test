import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from "../pages/UserProfile";

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/user/:username" element={<UserProfile/>}/>
        </Routes>
    )
}

export default IndexRouter;
