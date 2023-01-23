import styled from "styled-components";

export const StyledForm = styled.form`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    width: 70%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    font-size: calc(1vw + 0.1rem);
    font-weight: 400;

    input {
      width: 95%;
      height: 2rem;
      font-size: calc(1vw + 0.1rem);
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    p {
      font-size: calc(1vw + 0.005rem);
      color: red;
    }
  }

  div {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0.75rem 0;

    label {
      max-width: 5.5rem;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: flex-end;

      input {
        width: 20px;
      }
    }
  }

  button {
    width: 70%;
    height: 3rem;
    font-size: calc(1vw + 0.2rem);
    margin-top: 0.75rem;
    font-weight: 700;
    border-radius: 0.25rem;
    background-color: yellow;
    border: 1px solid yellow;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      background-color: green;
      border: 1px solid green;
    }
  }
`;
