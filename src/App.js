import React from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom"
import {createBrowserHistory} from 'history';
import Aboutpage from './pages/Aboutpage'
import Homepage from './pages/Homepage'
import Contactpage from './pages/Contactpage'

function App() {
  return (
    <div>
      {/* <Contactpage /> */}
      {/* <Homepage /> */}
       {/* <Aboutpage />  */}
       <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path = "/" component={Homepage} />
          <Route exact path = "/AboutUs" component={Aboutpage} />
          <Route exact path = "/ContactUs" component={Contactpage} />
          <Redirect from="*" to= "/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
