import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Photo from "./pages/photo/Photo.js";
import UploadPhoto from "./pages/uploadPhoto/UploadPhoto";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/upload-photo">
            <UploadPhoto />
          </Route>
          <Route path="/photo">
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
