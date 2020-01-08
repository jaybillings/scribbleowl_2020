import React from 'react';
import {Switch} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";

import SinglePageLayout from "./layouts/SinglePageLayout";
import GalleryLayout from "./layouts/GalleryLayout";
import NotFound from "./layouts/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={SinglePageLayout}/>
        <Route exact path={'/gallery/:alias'} component={GalleryLayout}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default App;
