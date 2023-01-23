import { createContext, useState } from "react";
import {
  ICalculatorContext,
  ICalculatorProps,
  IRequestCalculator,
  IResponseCalculator,
} from "../interfaces";
import api from "../services";

export const CalculatorContext = createContext({} as ICalculatorContext);

export default function CalculatorProvider({ children }: ICalculatorProps) {
  const [response, setResponse] = useState<IResponseCalculator>({});
  const [modal, setModal] = useState<string>("null");
  const [modalSuccess, setModalSuccess] = useState<string>("");
  const [modalError, setModalError] = useState<string>("");

  function calculator(data: IRequestCalculator) {
    setModal("load");
    api
      .post("?timeout", data)
      .then(res => {
        setModal("success");
        setModalSuccess("Sucesso");
        closeModal();
        setResponse(res.data);
      })
      .catch(err => {
        handleError(err);
      });

    function closeModal() {
      setTimeout(() => {
        setModal("null");
      }, 3000);
    }

    function handleError(err: any) {
      setModal("error");

      if (err.message === "timeout of 15000ms exceeded") {
        setModalError("Servidor está demorando para responder");
        closeModal();
        return;
      }
      if (err.message === "Network Error") {
        setModalError("Sem conexão com a internet");
        closeModal();
        return;
      }
      if (err.response.status === 408) {
        setModalError(
          "Servidor está demorando para processar a requisição ( HTTP Error 408)"
        );
        closeModal();
        return;
      }
      if (err.response.status === 500) {
        setModalError("Servidor não atendeu a solicitação (HTTP Error 500)");
        closeModal();
        return;
      } else {
        setModalError("Houve algum problema");
        closeModal();
        return;
      }
    }
  }

  return (
    <CalculatorContext.Provider
      value={{ calculator, response, modal, modalSuccess, modalError }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
