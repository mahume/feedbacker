import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import { IsLoggedInContext } from "../../context/Store";
import Landing from "../pages/Landing/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";
import NewSurvey from "../pages/NewSurvey/index.jsx";
import Navbar from "../../components/Navbar/index.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);

  const fetchUser = async () => {
    const { data } = await axios.get("/api/current_user");
    setIsLoggedIn(data || false);
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div className="container">
      <BrowserRouter>
        <>
          <Navbar />
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/surveys" component={Dashboard} exact />
            <Route path="/surveys/new" component={NewSurvey} />
          </Switch>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
