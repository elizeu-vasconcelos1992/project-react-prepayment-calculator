import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes scale-in {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  div {
    width: 20rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 1rem;
    gap: 2rem;
    box-shadow: 0px 0px 28px -2px rgba(237, 21, 21, 0.75);
    animation: scale-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  svg {
    width: 7rem;
    height: 7rem;
    color: #ff3030;
  }

  h3 {
    text-align: center;
    font-weight: 600;
    font-size: 1.25rem;
    color: white;
  }

  @media (max-width: 340px) {
    div {
      width: 18rem;
      height: 13rem;
    }
  }
`;
