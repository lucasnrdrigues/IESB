import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors
from sklearn.cluster import DBSCAN
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
import seaborn as sns

plt.style.use('seaborn-v0_8')
sns.set()

df = pd.DataFrame(pd.read_pickle('x_scaled.pickle'))
print(df.head())

neighbors = NearestNeighbors(n_neighbors=5)
neighbors_fit = neighbors.fit(df)
distances, indices = neighbors_fit.kneighbors(df)

distances = np.sort(distances[:, 4])
plt.figure(figsize=(10, 5))
plt.plot(distances)
plt.title('Gráfico k-Distance para determinar eps')
plt.xlabel('Pontos ordenados')
plt.ylabel('Distância aos 5º vizinhos')
plt.grid()
plt.show()

eps = 0.5
min_samples = 5

dbscan = DBSCAN(eps=eps, min_samples=min_samples)
dbscan.fit(df)

df['cluster'] = dbscan.labels_

pca = PCA(n_components=2)
pca_result = pca.fit_transform(df.drop('cluster', axis=1))

df['pca1'] = pca_result[:, 0]
df['pca2'] = pca_result[:, 1]

plt.figure(figsize=(10, 7))
sns.scatterplot(
    x='pca1', y='pca2',
    hue='cluster',
    palette=sns.color_palette("hls", len(set(dbscan.labels_))),
    data=df,
    legend="full"
)
plt.title('Visualização dos Clusters com PCA')
plt.show()

n_clusters = len(set(dbscan.labels_)) - (1 if -1 in dbscan.labels_ else 0)
n_outliers = list(dbscan.labels_).count(-1)

print(f'Número de clusters encontrados: {n_clusters}')
print(f'Número de outliers detectados: {n_outliers}')
