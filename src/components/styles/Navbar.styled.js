import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.lightColor};
  position: fixed;
  top: 0;
  left: 0%;
  width: 100vw;
  box-sizing: border-box;
  height: 3rem;
  display: flex;
  padding: 28px 1rem;
  z-index: 100;
  box-shadow: 0 4px 8px #0000001a;
  justify-content: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    img {
      width: 45px;
      border-radius: 50%;
    }
  }

  button {
    height: 2rem;
    width: 2rem;
    svg {
      height: 2rem;
      width: 2rem;
      fill: ${({ theme }) => theme.colors.darkColor};
      &:hover {
        fill: ${({ theme }) => theme.colors.highColor};
      }
    }
  }
`;
