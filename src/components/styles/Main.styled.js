import styled from "styled-components";

export const StyledMain = styled.div`
  margin-top: 5rem;
  margin-bottom: 1rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .pages-nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page-arrow {
    width: 2rem;
    height: 2rem;
    margin: 2rem;

    svg {
      width: 2rem;
      height: 2rem;
      &:hover {
        fill: ${({ theme }) => theme.colors.highColor};
      }
    }
  }
`;
