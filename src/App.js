import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Apartment from "./pages/Apartment/Apartment";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  div {
    font-family: "Montserrat", sans-serif;
    margin: 2vh;
  }
`;

export default function App() {
  return (
    <Router>
      <GlobalStyle />
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
  );
}
