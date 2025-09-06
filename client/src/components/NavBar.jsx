import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AddCircle, ExploreOutlined } from "@mui/icons-material";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Gives current path

  const isCreatePage = location.pathname === "/createpost";
  const buttonText = isCreatePage ? "Explore Posts" : "Create New Post";
  const buttonRoute = isCreatePage ? "/" : "/createpost";
  const buttonIcon = isCreatePage ? (
    <ExploreOutlined className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
  ) : (
    <AddCircle className="mr-2 transition-transform duration-300 group-hover:rotate-24" />
  );

  return (
    <div
      className="flex bg-zinc-900 justify-between p-3 text-white font-bold
                 shadow-lg animate-fade-in-down"
    >
      <div
        className=" grid grid-cols-2 ml-4 pt-2 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => navigate("/")}
      >
        <img src="/logo.png" alt="GenAI Gallery" className="w-10 h-10" />
        <span className="font-michroma text-sm bg-clip-text text-transparent 
                 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-300 -ml-2">
  GenAI <br />Gallery
</span>

      </div>
      <div>
        <button
          className="group mr-4 bg-purple-700 pl-3 p-2 pr-3 rounded-xl 
                     hover:bg-blue-700 flex items-center 
                     transition-transform duration-300 hover:scale-105 active:scale-95"
          onClick={() => navigate(buttonRoute)}
        >
          {buttonIcon}
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
