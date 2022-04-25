import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/colors/colors";

const ErrorContainer = styled.div`
  text-align: center;
  height: 80vh;
  width: 100vw;
  top: 20vh;
  color: ${colors.primary};
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
`;

const LinkContainer = styled(Link)`
  color: #ff6060;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

export default function Error() {
  return (
    <ErrorContainer>
      <h2>404</h2>
      <p>Oops! It looks like this page doesn't exist.</p>
      <LinkContainer to="/">Go back to home page</LinkContainer>
    </ErrorContainer>
  );
}
