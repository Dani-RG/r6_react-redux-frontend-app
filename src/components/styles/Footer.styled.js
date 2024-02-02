import styled from "styled-components";

export const StyledFooter = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2rem;
  bottom: 0;

  .footer-elems {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-icons {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
  }

  .social-icon {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
