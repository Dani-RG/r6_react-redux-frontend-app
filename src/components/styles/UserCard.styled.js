import styled from "styled-components";

export const StyledUserCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightColor};
  text-align: center;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  button {
    background-color: ${({ theme }) => theme.colors.darkColor};
    color: ${({ theme }) => theme.colors.lightColor};
    box-shadow: ${({ theme }) => theme.shadows.boxShadow};
    font-weight: 600;
    border-radius: 50px;

    margin: 1rem;
    padding: 0.5rem 2rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.highColor};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
  }
`;
