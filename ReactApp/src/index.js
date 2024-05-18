console.log("This is the first file in front end application!!!")

import React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrapping react application in root element of index.html
root.render( 
    <App />
)