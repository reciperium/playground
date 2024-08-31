import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecipeProvider } from "@reciperium/react-recipe";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecipeProvider defaultTheme="highlighted">
      <App />
    </RecipeProvider>
  </React.StrictMode>
);
