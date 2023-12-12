import styled from "styled-components";

export const StyledSidebar = styled.div`
  height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.lightColor};
  position: absolute;
  width: max-content;
  line-height: 2rem;
  padding: 2.5rem;

  div {
    margin-top: 30vh;
  }

  button {
    background-color: ${({ theme }) => theme.colors.darkColor};
    color: ${({ theme }) => theme.colors.lightColor};
    font-weight: 600;
    border-radius: 50px;

    margin: 2rem;
    padding: 0.5rem 2rem;
  }
`;
