import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import HomePage from "./components/Home";
import QuestionDashboard from "./components/QuestionDashboard";
import EditorialDashboard from "./components/EditorialDashboard";
import AboutPage from "./components/About";
import AdminPanel from "./components/admin";
import NotFound from "./components/NotFound";

const App = (props) => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/practice"]} component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/:groupId/questions" component={QuestionDashboard} />
          <Route path="/:groupId/editorials" component={EditorialDashboard} />
          <Route exact path="/admin" component={AdminPanel} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
