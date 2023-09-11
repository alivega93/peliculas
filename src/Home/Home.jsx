import React from "react";
import NavComponent from "../Nav/Nav";
import { Outlet } from "react-router-dom"

export default function Home() {
    return (
        <>
            <NavComponent />
            <Outlet />
        </>
    );
}

