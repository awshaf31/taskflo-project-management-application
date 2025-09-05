import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <Outlet />  {/* This renders sign-in, sign-up, etc */}
    </div>
  );
};

export default AuthLayout;
