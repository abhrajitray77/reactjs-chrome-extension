import React, { useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  //funtion for route changing
  const routeChange = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <nav className="p-5">
      <ul className="flex space-x-6 text-gray-100 text-md font-medium ">
        <li
          className="cursor-pointer hover:text-green-400 hover:scale-110 transition-all duration-500"
          onClick={() => routeChange("/")}
        >
          GPT
        </li>
        <li
          className="cursor-pointer hover:scale-110 transition-all duration-500"
          onClick={() => routeChange("/Clips")}
        >
          Clipboard
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
