import * as Yup from 'yup';

//Tirei isso do site https://formik.org/docs/guides/validation
const AeroportosValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(10, 'O máximo de caracteres é 50')
    .required('Campo obrigatório'),
  sigla: Yup.string()
    .min(2, 'O mínimo de caracteres é 2')
    .max(3, 'O máximo de caractees é 3')
    .required('Campo obrigatório'),
  uf: Yup.string()
    .min(2, 'O mínimo de caracteres é 2')
    .max(2, 'O máximo de caractees é 2')
    .required('Campo obrigatório'),
  cidade: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(20, 'O máximo de caractees é 20')
    .required('Campo obrigatório'),
  pais: Yup.string()
    .min(4, 'O mínimo de caracteres é 4')
    .max(152, 'O máximo de caractees é 15')
    .required('Campo obrigatório'),
});

export default AeroportosValidator