import logoLight from "../../images/logo-light.svg";
import Container from "../Container";

import { StyledFooter, Logo } from "./styled-components";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo src={logoLight} alt="Dialogue logo" data-testid="logo" />
        <p>Dialogue © 2021</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
