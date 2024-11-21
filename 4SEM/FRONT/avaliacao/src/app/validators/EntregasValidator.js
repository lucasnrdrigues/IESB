import * as Yup from 'yup';

const EntregasValidator = Yup.object().shape({
    produto: Yup.string()
        .required('O produto é obrigatório')
        .min(2, 'O nome do produto deve ter pelo menos 3 caracteres'),
    descricao: Yup.string()
        .required('A descricao é obrigatória')
        .min(10, 'O nome do produto deve ter pelo menos 10 caracteres'),
    cliente: Yup.string()
        .required('O cliente é obrigatório'),
    preco: Yup.number()
        .required('O preço é obrigatório')
        .min(0.01, 'O preço deve ser maior que zero'),
    peso: Yup.number()
        .required('O peso é obrigatório')
        .min(0.1, 'O peso deve ser maior que zero'),
    tamanho: Yup.string()
        .required('O tamanho é obrigatório'),
});

export default EntregasValidator;
