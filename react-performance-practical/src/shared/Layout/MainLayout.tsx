import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div style={{ padding: "2rem" }}>
        <Outlet /> {/* 👈 Renders nested route content here */}
      </div>
    </>
  );
};

export default MainLayout;
