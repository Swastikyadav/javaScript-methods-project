import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Array from "./components/array/Array";
import Method from "./components/method/Method";
import String from  "./components/string/String";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router> */}
        <Route exact path="/" component={Home} />
        <Route path="/array" component={Array} />
        <Route path="/string" component={String} />
        <Route path="/methods" component={Method} />
      {/* </Router> */}
    </div>
  );
}

export default App;
