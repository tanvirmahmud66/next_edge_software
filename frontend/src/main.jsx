import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "lenis/react";

import "./index.css";
import "lenis/dist/lenis.css";

import App from "./App.jsx";
import { queryClient } from "./lib/queryClient";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactLenis
        root
        options={{
          autoRaf: true,
          duration: 1.3,
          smoothWheel: true,
          syncTouch: true,
          touchMultiplier: 2,
          wheelMultiplier: 1,
        }}
      >
        <App />
      </ReactLenis>
    </QueryClientProvider>
  </StrictMode>
);