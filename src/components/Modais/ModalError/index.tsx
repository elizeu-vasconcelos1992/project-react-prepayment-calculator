import { Container } from "./styles";
import { HiEmojiSad } from "react-icons/hi";
import { useContext } from "react";
import { CalculatorContext } from "../../../context/CalculatorContext";

function ModalError() {
  const { modalError } = useContext(CalculatorContext);

  return (
    <Container>
      <div>
        <HiEmojiSad />
        <h3>{modalError}</h3>
      </div>
    </Container>
  );
}

export default ModalError;
