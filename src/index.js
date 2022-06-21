import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
/* Import of the page */
import HomePage from "./Pages/HomePage";
import WorkPage from "./Pages/WorkPage";
import "./index.css";
import NotFound from "./Pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AnimatePresence exitBeforeEnter initial={true}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);
