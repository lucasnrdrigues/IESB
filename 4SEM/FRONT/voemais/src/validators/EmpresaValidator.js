import * as Yup from 'yup';

//Tirei isso do site https://formik.org/docs/guides/validation
const EmpresaValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(10, 'O máximo de caracteres é 50')
    .required('Campo obrigatório'),
  logo: Yup.string()
    .min(1, 'O mínimo de caracteres é 1'),
  site: Yup.string(),
});

export default EmpresaValidator