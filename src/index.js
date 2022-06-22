import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
/* Import of the page */
import HomePage from "./Pages/HomePage";
import WorkPage from "./Pages/WorkPage";
import "./index.css";
import NotFound from "./Pages/404";
import DoggoViewer from "./Pages/Works/doggo-viewer";
import Shinomasuyoo from "./Pages/Works/shinomasuyoo";
import KnowledgePage from "./Pages/KnowledgePage";
import ContactPage from "./Pages/ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AnimatePresence exitBeforeEnter initial={true}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorkPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/knowledges" element={<KnowledgePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* 
            Route for the Works Folder 
        */}
        <Route path="/works/doggo-viewer" element={<DoggoViewer />} />
        <Route path="/works/shinomasuyoo" element={<Shinomasuyoo />} />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);
