import React from "react";
import ChatInput from "../components/ChatInput";
import { Route, Routes } from "react-router-dom";
import Clips from "../components/Clips";
import GptHome from "../components/GptHome";

const Popup = () => {
  return (
    <Routes>
      <Route path="/" element={<GptHome />} />
      <Route path="/Clips" element={<Clips />} />
    </Routes>
  );
};

export default Popup;
