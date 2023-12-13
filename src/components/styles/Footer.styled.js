import styled from "styled-components";

export const StyledFooter = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2rem;
  bottom: 0;

  .footer-sections {
    display: flex;
    justify-content: space-between;
  }

  .footer-elems {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-icons {
    width: 90%;
    display: flex;
    justify-content: space-evenly;
  }
`;
