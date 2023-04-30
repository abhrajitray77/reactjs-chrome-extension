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
      <ul className="flex space-x-3 text-gray-100">
        <li onClick={()=>routeChange("/")}>GPT</li>
        <li onClick={()=>routeChange("/Clips")}>Clips</li>
      </ul>
    </nav>
  );
};

export default Navbar;
