import * as Yup from 'yup';

const EnviosValidator = Yup.object().shape({
    identificador: Yup.string()
        .required('O ID do pacote é obrigatório.'),
    empresa: Yup.string()
        .required('A empresa/transportadora é obrigatória.'),
    origem: Yup.string()
        .required('A origem é obrigatória.'),
    destino: Yup.string()
        .required('O destino é obrigatório.'),
    preco: Yup.number()
        .required('O preço é obrigatório.')
        .min(0.01, 'O preço deve ser maior que zero.'),
    data_envio: Yup.date()
        .required('A data de envio é obrigatória.')
        .nullable(),
    status: Yup.string()
        .oneOf(['entregue', 'enviado'], 'O status deve ser "entregue" ou "enviado".')
        .required('O status é obrigatório.'),
});

export default EnviosValidator;
