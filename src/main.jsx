import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import getFirestoreApp from "./firebase/config";

getFirestoreApp()

ReactDOM.createRoot(document.getElementById("root")).render(<App />);