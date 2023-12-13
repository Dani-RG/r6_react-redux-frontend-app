import styled from "styled-components";

export const StyledSidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.lightColor};
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  height: 100vh;
  text-align: center;
  position: fixed;
  width: max-content;
  line-height: 2rem;
  padding: 2.5rem;
  z-index: 100;

  div {
    margin-top: 30vh;
  }

  button {
    background-color: ${({ theme }) => theme.colors.darkColor};
    color: ${({ theme }) => theme.colors.lightColor};
    box-shadow: ${({ theme }) => theme.shadows.boxShadow};
    font-weight: 600;
    border-radius: 50px;

    margin: 2rem;
    padding: 0.5rem 2rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.highColor};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
  }
`;
