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

export interface ICalculatorContext {
  calculator: (data: IRequestCalculator) => void;
}

export interface ICalculatorProps {
  children: ReactNode;
}
