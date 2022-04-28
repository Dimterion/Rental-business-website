import { Link } from "react-router-dom";
import Header from "../Header/Header";
import styled from "styled-components";
import colors from "../../utils/colors/colors";

// Styles are set within JS variables
const ErrorContainer = styled.div`
  height: 80vh;
  width: 100vw;
  top: 20vh;
  color: ${colors.primary};
  font-size: 1.5rem;
`;

const ErrorHeaderContainer = styled.h2`
  font-size: 15vw;
  position: relative;
  top: 5vh;
  text-align: center;
`;

const ErrorTextContainer = styled.p`
  position: relative;
  top: 5vh;
  text-align: center;
`;

const LinkContainer = styled(Link)`
  color: ${colors.primary};
  position: relative;
  top: 15vh;
  display: flex;
  justify-content: center;
  text-align: center;
  &:hover {
    color: black;
  }
`;

export default function Error() {
  return (
    <ErrorContainer>
      <Header />
      <ErrorHeaderContainer>404</ErrorHeaderContainer>
      <ErrorTextContainer>
        Oops! It looks like this page doesn't exist.
      </ErrorTextContainer>
      <LinkContainer to="/">Go back to home page</LinkContainer>
    </ErrorContainer>
  );
}
