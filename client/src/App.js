import ScorePage from "./components/ScorePage.component";
import React, { Fragment } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import Homenav from "./components/HomeHeader.component";   // Use Home nav always
import Taketest from "./components/TakeTest.component";    // Home Page
import Testresult from "./components/TestResult.component"; // After test
import Ques from "./components/Question.component";         // Quiz questions

function App() {
  let location = useLocation();

  return (
    <React.Fragment>
      <nav>
        {/* Always show Home Navbar except during quiz */}
        {location.pathname !== "/test" && (
          <Homenav />
        )}
      </nav>

      <main>
        <Switch>
          {/* Home page - shows Zara's start quiz screen */}
          <Route exact path="/" component={Taketest} />

          {/* Start the quiz directly */}
          <Route exact path="/test" component={Ques} />
          <Route exact path="/score" component={ScorePage} />


          {/* Show result after quiz */}
          <Route exact path="/abouttest" component={Testresult} />

          {/* Any other route → go back to home */}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
