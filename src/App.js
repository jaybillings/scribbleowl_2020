import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import SinglePageLayout from "./layouts/SinglePageLayout";
import GalleryLayout from "./layouts/GalleryLayout";

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={SinglePageLayout}/>
      <Route exact path={'/gallery/:projid'} component={GalleryLayout}/>
    </Router>
  )
}

export default App;
