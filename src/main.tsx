import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <TooltipProvider delayDuration={400}>
        <App />
      </TooltipProvider>
    </HashRouter>
  </React.StrictMode>
);
