import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrawingPanel from './drawing_panel';
import React from 'react';
// import { BrowserRouter,Switch,Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      {/* <BrowserRouter> */}
      {/* <Switch> */}
        {/* <Route path="/amit" exact> */}
          <DrawingPanel/>
        {/* </Route> */}
      {/* </Switch> */}
      {/* </BrowserRouter> */}
    </React.Fragment>    
  );
}

export default App;
