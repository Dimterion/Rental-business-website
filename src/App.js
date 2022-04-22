import "./app.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Apartment from "./pages/Apartment/Apartment";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/apartment/:apartmentId">
            <Apartment />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
