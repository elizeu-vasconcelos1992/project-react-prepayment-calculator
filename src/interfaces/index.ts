import { ReactNode } from "react";

export interface IRequestCalculator {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
  day1?: number | string;
  day15?: number | string;
  day30?: number | string;
  day90?: number | string;
}

export interface IResponseCalculator {
  1?: number;
  15?: number;
  30?: number;
  90?: number;
}

export interface ICalculatorContext {
  calculator: (data: IRequestCalculator) => void;
  response: IResponseCalculator;
  modal: string;
  modalSuccess: string;
  modalError: string;
}

export interface ICalculatorProps {
  children: ReactNode;
}
