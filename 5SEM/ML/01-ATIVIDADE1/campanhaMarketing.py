#INSTALANDO AS DEPENDENCIAS DO PROJETO
# pip install matplotlib
# pip install pandas
# pip install numpy

# Importando as dependencias
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np




#IMPORTAÇÃO DO DATASET
# carregamento do arquivo marketing.csv 
marketing = pd.read_csv('./marketing.csv', delimiter=',')






#EXAMINANDO OS DADOS
# a) Imprima as primeiras 5 linhas do DatFrame marketing
print(marketing.head(5))

# b) Imprima um resumo estatístico de todas as colunas do DataFrame marketing
print(marketing.describe(include="all"))

# c) Imprima tipos de dados das colunas e a quantidade de valores não-nulos por coluna
print(marketing.info())






# ATUALIZANDO OS TIPOS DE DADOS DE UMA COLUNA
# Verifique o tipo de dado da coluna is_retained
print(marketing['is_retained'].dtype)

# Converta is_retained para booleano
marketing['is_retained'] = marketing['is_retained'].astype('bool')

# Verifique novamente o tipo de dado da coluna is_retained
print(marketing['is_retained'].dtype)




# ADICIONANDO NOVAS COLUNAS
# Mapping for channels
channel_dict = {"House Ads": 1, "Instagram": 2, 
                "Facebook": 3, "Email": 4, "Push": 5}


# Aplicar o mapeamento à coluna 'subscribing_channel'
marketing['channel_code'] = marketing['subscribing_channel'].map(channel_dict)

# Add the new column is_correct_lang
marketing['is_correct_lang'] = np.where(marketing['language_preferred'] == marketing['language_displayed'], 'Yes', 'No')

# Exibir o DataFrame resultante
print(marketing)






#COLUNAS DE DATA
# Ler o arquivo marketing.csv e especificar as colunas de data corretamente
marketing = pd.read_csv('marketing.csv', parse_dates=['date_served', 'date_subscribed', 'date_canceled'])

# Adicionar uma coluna com o dia da semana (DoW)
marketing['DoW'] = marketing['date_column_name'].dt.day_name()

# Exibir o DataFrame para verificar as alterações
print(marketing)






#ANÁLISE EXPLORATÓRIA INICIAL
# Item A
daily_users = marketing.groupby(['date_served'])['user_id'].nunique()

# Exibir as primeiras linhas do DataFrame daily_users
print(daily_users.head())





#VISUALIZANDO O ALCANCE DIÁRIO DE MARKETING
# Plot daily_users
daily_users.plot()

# Include a title and y-axis label
plt.title('Usuários Diários')
plt.ylabel('Número de usuários')

# Rotate the x-axis labels by 45 degrees
plt.xticks(rotation=45)

# Display the plot
plt.show()