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
        <Route key={'single'} exact path={'/'} component={SinglePageLayout}/>
        <Route key={'gallery'} exact path={['/gallery/:alias/:index','/gallery/:alias/']} component={GalleryLayout}/>
        <Route key={'error'} component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default App;
