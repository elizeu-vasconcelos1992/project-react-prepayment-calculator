import { StyledForm } from "./styles";
import { useForm } from "react-hook-form";
import { schemaInput } from "../../schemas";
import { IRequestCalculator } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { CalculatorContext } from "../../context/CalculatorContext";
import { useContext } from "react";

export default function Form() {
  const { calculator } = useContext(CalculatorContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequestCalculator>({
    resolver: yupResolver(schemaInput),
  });

  function formRequest(data: IRequestCalculator) {
    const days = [];
    if (data.day1 === "1") {
      days.push(1);
    }
    if (data.day15 === "15") {
      days.push(15);
    }
    if (data.day30 === "30") {
      days.push(30);
    }
    if (data.day90 === "90") {
      days.push(90);
    }

    const { amount, installments, mdr } = data;

    if (days.length > 0) {
      return calculator({ amount, installments, mdr, days });
    }

    return calculator({ amount, installments, mdr });
  }

  return (
    <StyledForm onSubmit={handleSubmit(formRequest)}>
      <h3>Simule sua antecipação</h3>
      <label>
        Informe o valor da renda
        <input
          type='number'
          placeholder=' Ex.: R$ 1000'
          {...register("amount")}
        />
        <p>{errors.amount?.message}</p>
      </label>
      <label>
        Quantidade de parcelas
        <input
          type='number'
          placeholder='Ex.: 10'
          {...register("installments")}
        />
        <p>{errors.installments?.message}</p>
      </label>
      <label>
        Percentual MDR
        <input type='number' placeholder='Ex.: 70' {...register("mdr")} />
        <p>{errors.mdr?.message}</p>
      </label>
      <label>Períodos (opcional)</label>
      <div>
        <label>
          Amanhã
          <input type='checkbox' defaultValue={1} {...register("day1")} />
        </label>
        <label>
          15 dias
          <input type='checkbox' defaultValue={15} {...register("day15")} />
        </label>
        <label>
          30 dias
          <input type='checkbox' defaultValue={30} {...register("day30")} />
        </label>
        <label>
          90 dias
          <input type='checkbox' defaultValue={90} {...register("day90")} />
        </label>
      </div>
      <button type='submit'>Calcular</button>
    </StyledForm>
  );
}
