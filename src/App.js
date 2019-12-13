import React from 'react';

import 'normalize.css/normalize.css';
import './styles/index.css';

import SinglePageLayout from "./layouts/SinglePageLayout";

function App() {
  return (
      <SinglePageLayout forHire={false} />
  )
}

export default App;
