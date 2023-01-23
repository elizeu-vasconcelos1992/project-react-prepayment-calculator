import { useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";
import { StyledOutPut } from "./styles";

export default function OutPuts() {
  const { response } = useContext(CalculatorContext);

  return (
    <StyledOutPut>
      <h3>Você receberá:</h3>
      {Object.keys(response)?.map(
        (item, index) =>
          (item === "1" && (
            <p key={index}>
              {" "}
              Amanhã:{" "}
              {response[1]?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          )) ||
          (item === "15" && (
            <p key={index}>
              Em 15 dias:{" "}
              {response[15]?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          )) ||
          (item === "30" && (
            <p key={index}>
              {" "}
              Em 30 dias:{" "}
              {response[30]?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          )) ||
          (item === "90" && (
            <p key={index}>
              Em 90 dias:{" "}
              {response[90]?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          ))
      )}
    </StyledOutPut>
  );
}
