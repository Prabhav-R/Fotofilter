import React from "react";
import "./App.css";

import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Application from "./Application";
import Footer from "./components/Footer";

function App() {
  return (
    <GeistProvider theme={{ type: "dark" }}>
      <CssBaseline />
      <div className="App">
        <Application />
        <Footer />
      </div>
    </GeistProvider>
  );
}

export default App;
