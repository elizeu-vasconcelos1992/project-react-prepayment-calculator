import { useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";
import InputPage from "../InputsPage";
import OutPutPage from "../OutputsPages";
import ModalLoad from "../Modais/ModalLoad";
import ModalSucess from "../Modais/ModalSucess";
import ModalError from "../Modais/ModalError";

export default function Main() {
  const { modal } = useContext(CalculatorContext);
  return (
    <>
      <InputPage />
      <OutPutPage />
      {modal === "error" && <ModalError />}
      {modal === "success" && <ModalSucess />}
      {modal === "load" && <ModalLoad />}
    </>
  );
}
