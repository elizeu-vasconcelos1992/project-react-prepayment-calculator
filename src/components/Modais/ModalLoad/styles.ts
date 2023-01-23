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

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    gap: 0.5rem;
  }

  img {
    width: 70px;
    height: 70px;
  }

  h3 {
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    color: white;
  }

  @media (max-width: 340px) {
    div {
      width: 18rem;
      height: 13rem;
    }
  }
`;
