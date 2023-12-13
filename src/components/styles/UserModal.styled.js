import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    background-color: ${({ theme }) => theme.colors.lightColor};
    text-align: center;
    border-radius: 8px;
    padding: 2rem;
    width: 80%;
    max-width: 400px;
    box-shadow: ${({ theme }) => theme.shadows.boxShadow};
    transition: box-shadow 0.3s ease;
    z-index: 11;
    display: flex;
    flex-direction: column;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .modal-btns {
      display: flex;
      flex-direction: column;
    }

    .form {
      display: flex;
      flex-direction: column;
      width: 95%;
      align-self: center;
    }

    input {
      line-height: 1.5rem;
      margin: 1rem;
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
  }
`;
