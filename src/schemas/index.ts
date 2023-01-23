import * as yup from "yup";

export const schemaInput = yup.object().shape({
  amount: yup
    .number()
    .required("Campo obrigatório.")
    .typeError("Campo Obrigatório")
    .min(1000, "Informe um valor maior")
    .max(1000000, "Informe um valor menor."),
  installments: yup
    .number()
    .required("Campo obrigatório.")
    .typeError("Campo Obrigatório")
    .min(1, "Deve haver pelo menos uma parcela.")
    .max(12, "O máximo de parcelas permitidas são 12."),
  mdr: yup
    .number()
    .required("Campo obrigatório")
    .typeError("Campo Obrigatório")
    .min(0, "A taxa não pode ser negativa")
    .max(100, "A taxa máxima é 100%."),
});
