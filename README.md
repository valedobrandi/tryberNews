# Instalação :

- Aplicação (FRONTEND) em NodeJS construida com o Vite + React.
- Suite de (TESTS) para validar o estado da aplicação.

  1. Para rodar, clone o repositório em https://github.com/valedobrandi/tryberNews.
  2. Instalar a aplicação com <i>npm install</i>
  3. Rodar o comando <i>npm run dev</i>

# Rodar os Tests:

1. Rodar o comando <i>npm run test</i>

# Deploy : http://newstrybeapp.surge.sh/


# Workflow de git :

* eff8a06 (HEAD -> master, origin/master) feat: deploy surge warring 1
* 6cac835 feat: deploy
* cd2ee15 feat: test favorite
* 27b5ab0 feat: test suite
* 308b3c4 feat: reinstall eslintr
* baec78b feat eslint rule install
* 04ea22c feat: style query tags
* e678130 feat: style title banner
* 3fa3e37 feat: remove introduction add title banner
*   a96cbd2 (add-scrollUpdate) Merge pull request #6 from valedobrandi/add-dateSearchtag
|\  
| * 8919452 (origin/add-dateSearchtag, add-dateSearchtag) feat: querys tags and query useState
|/  
*   e0e5436 Merge pull request #5 from valedobrandi/add-searchByQuery
|\  
| * 7dc1320 (origin/add-searchByQuery, add-searchByQuery) feat: search by word and searchTag
|/  
*   14c3acf Merge pull request #4 from valedobrandi/add-datePicker
|\  
| * ce5262c (origin/add-datePicker, add-datePicker) feat: add search by date
|/  
*   2400658 Merge pull request #3 from valedobrandi/add-favorite-feature
|\  
| * 94561df (origin/add-favorite-feature, add-favorite-feature) feat: implementacao aba favoritos
|/  
*   f4daceb Merge pull request #2 from valedobrandi/screen/render-news
|\  
| * d26d6c6 (origin/screen/render-news, screen/render-news) feat: sort news by closest day
|/  
*   11993a8 Merge pull request #1 from valedobrandi/search-service
|\  
| * 98dcc59 (origin/search-service, search-service) feat: add tag/btn searchbar
|/  
* 9cfe4a1 feat: first commit

# Histórico do Projeto

## Criação do Projeto

O projeto foi criado em [Apr 23 2024] com o objetivo de [disponibilizar as notícias da API do IBGE].
https://servicodados.ibge.gov.br/api/docs/noticias?versao=3

## Principais Funcionalidades

-  Adicionada a funcionalidade de busca por palavra.
-  Adicionada a funcionalidade de consulta por data.
-  Introdução da funcionalidade de favoritos.
-  Adicionada a funcionalidade de TAGS para remover as consultas.
-  Adicionada a funcionalidade de escolher o número de notícias baixadas da Api.
-  Adiciona o layout responsivo.

