import { Container } from "./styles";
import { FaGrinWink } from "react-icons/fa";
import { useContext } from "react";
import { CalculatorContext } from "../../../context/CalculatorContext";

function ModalSucess() {
  const { modalSuccess } = useContext(CalculatorContext);
  return (
    <Container>
      <div>
        <FaGrinWink />
        <h3>{modalSuccess}</h3>
      </div>
    </Container>
  );
}

export default ModalSucess;
