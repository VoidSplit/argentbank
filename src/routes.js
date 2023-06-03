import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import User from "./pages/User";
import SignIn from "./pages/SignIn"
export default function RouteManager() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={ <Home/> }/>
            <Route exact path="/login" element={ <SignIn/> }/>
            <Route exact path="/profile" element={ <User/> }/>

            <Route path='*' element={ <Home /> }/>
          </Routes>
      </div>
    </Router>
  );
};