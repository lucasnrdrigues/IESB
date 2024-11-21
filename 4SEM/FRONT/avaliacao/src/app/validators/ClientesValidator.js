import * as Yup from 'yup';

const ClientesValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O mínimo de caracteres é 3!')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo obrigatório'),
  documento: Yup.string()
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Email inválido!')
    .required('Campo obrigatório'),
  telefone: Yup.string()
    .required('Campo obrigatório'),
  endereco: Yup.string()
    .required('Campo obrigatório'),
});

export default ClientesValidator;
