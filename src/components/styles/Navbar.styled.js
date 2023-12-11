import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.lightColor};

  div {
    img {
      width: 3rem;
      border-radius: 50%;
    }
  }
`;
