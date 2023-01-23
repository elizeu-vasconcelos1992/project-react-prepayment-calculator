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

  function calculator(data: IRequestCalculator) {
    api
      .post("", data)
      .then(res => setResponse(res.data))
      .catch(err => console.log(err));
  }

  return (
    <CalculatorContext.Provider value={{ calculator, response }}>
      {children}
    </CalculatorContext.Provider>
  );
}
