import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthContext } from "../../context/Store";
import Landing from "../pages/Landing/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";
import NewSurvey from "../pages/NewSurvey/index.jsx";

const App = () => {
  const [auth, setAuth] = useContext(AuthContext)

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/surveys" component={Dashboard} />
          <Route path="/new" component={NewSurvey} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
