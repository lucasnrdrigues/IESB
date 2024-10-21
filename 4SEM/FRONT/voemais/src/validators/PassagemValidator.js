import * as Yup from 'yup';

const PassagemValidator = Yup.object().shape({
  voo: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(10, 'O máximo de caracteres é 10')
    .required('Campo obrigatório'),
  passageiro: Yup.string()
    .required('Campo obrigatório'),
  assento: Yup.string()
    .matches(/^[A-Za-z]{1}\d{1,2}$/, 'Formato de assento inválido')
    .required('Campo obrigatório'),
  preco: Yup.number()
    .typeError('Deve ser um número')
    .min(1, 'O valor mínimo é 1')
    .required('Campo obrigatório')
});

export default PassagemValidator;
