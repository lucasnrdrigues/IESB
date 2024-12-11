import os  # Biblioteca para interagir com o sistema operacional, como manipular arquivos
import pyaes  # Biblioteca para operações de criptografia AES

# Abrir o arquivo criptografado
# O arquivo "teste.txt.ransomwaretroll" é aberto no modo de leitura binária ("rb")
file_name = "teste.txt.ransomwaretroll"
file = open(file_name, "rb")  # Abrir o arquivo criptografado
file_data = file.read()  # Ler todo o conteúdo do arquivo criptografado
file.close()  # Fechar o arquivo para liberar o recurso do sistema

# Definir a chave de descriptografia
# A mesma chave usada para criptografar deve ser utilizada para descriptografar
key = b"testeransomwares"

# Inicializar o modo de operação AES-CTR com a chave definida
# O modo CTR permite descriptografar os dados criptografados
aes = pyaes.AESModeOfOperationCTR(key)

# Descriptografar o conteúdo do arquivo
# O método `decrypt` reverte o processo de criptografia
decrypt_data = aes.decrypt(file_data)

# Remover o arquivo criptografado
# Após a descriptografia, o arquivo criptografado é excluído
os.remove(file_name)

# Criar um novo arquivo para salvar os dados descriptografados
# O nome original do arquivo ("teste.txt") é restaurado
new_file = "teste.txt"
new_file = open(f'{new_file}', "wb")  # Abrir o novo arquivo no modo de escrita binária ("wb")
new_file.write(decrypt_data)  # Escrever os dados descriptografados no arquivo
new_file.close()  # Fechar o arquivo para concluir a operação
