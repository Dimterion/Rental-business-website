import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Apartment from "./pages/Apartment/Apartment";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import colors from "./utils/colors/colors";

// Setting global style through JS to set font and overall margin
const GlobalStyle = createGlobalStyle`
  * {
    --primaryColor: ${colors.primary};
    --secondaryColor: ${colors.secondary};
    --mainBackgroundColor: ${colors.mainBackground};
    --footerBackgroundColor: ${colors.footerBackground};
    font-family: "Montserrat", sans-serif;
    margin: 0;
  }
`;

// Routing and main structure of the site
export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/rental-business-website/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/apartment/:apartmentId">
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
