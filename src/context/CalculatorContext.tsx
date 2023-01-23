import { createContext } from "react";
import {
  ICalculatorContext,
  ICalculatorProps,
  IRequestCalculator,
} from "../interfaces";
import api from "../services";

export const CalculatorContext = createContext({} as ICalculatorContext);

export default function CalculatorProvider({ children }: ICalculatorProps) {
  function calculator(data: IRequestCalculator) {
    api
      .post("", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <CalculatorContext.Provider value={{ calculator }}>
      {children}
    </CalculatorContext.Provider>
  );
}
