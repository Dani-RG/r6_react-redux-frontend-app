import styled from "styled-components";

export const StyledLoginCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightColor};
  color: ${({ theme }) => theme.colors.darkColor};
  text-align: center;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};

  h2 {
    padding: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 0 auto;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 2rem;
    margin: 2rem 0;
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.shadows.boxShadow};
    border-radius: 5px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.highColor};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    & > img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
