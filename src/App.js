import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Photo from "./pages/photo/Photo.js";
import UploadPhoto from "./pages/uploadPhoto/UploadPhoto";
import Error from "./pages/Error";

import "./css/index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <UploadPhoto />
          </Route>
          <Route path="/photo/">
            <Photo />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
