import * as Yup from 'yup';

const VooValidator = Yup.object().shape({
  internacional: Yup.string()
    .oneOf(['Sim', 'Não'], 'Deve ser Sim ou Não')
    .required('Campo obrigatório'),
  identificador: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(10, 'O máximo de caracteres é 10')
    .required('Campo obrigatório'),
  checkin: Yup.date()
    .required('Campo obrigatório'),
  embarque: Yup.date()
    .required('Campo obrigatório'),
  origem: Yup.string()
    .required('Campo obrigatório'),
  destino: Yup.string()
    .required('Campo obrigatório'),
  empresa: Yup.string()
    .required('Campo obrigatório'),
  preco: Yup.number()
    .typeError('Deve ser um número')
    .min(0, 'O valor mínimo é 0')
    .required('Campo obrigatório'),
});

export default VooValidator;
