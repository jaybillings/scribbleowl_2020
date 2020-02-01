import React from 'react';
import {Switch} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";

import SinglePageLayout from "./layouts/SinglePageLayout";
import GalleryLayout from "./layouts/GalleryLayout";
import NotFoundPage from "./layouts/NotFoundPage";
import ErrorPage from "./layouts/ErrorPage";

import 'normalize.css/normalize.css';
/*import './styles/imports.css';*/
/*import './styles/transitions.css';*/ /* TODO: Transitions should be togglable */
import 'hover.css/css/hover-min.css';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route key={'single'} exact path={'/'} component={SinglePageLayout}/>
        <Route key={'gallery'} exact path={['/gallery/:alias/:index','/gallery/:alias/', '/gallery']} component={GalleryLayout}/>
        <Route key={'oops'} exact path={'/oops'} component={ErrorPage}/>,
        <Route key={'notfound'} component={NotFoundPage}/>
      </Switch>
    </Router>
  )
}

export default App;
