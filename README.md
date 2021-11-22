# Posts blog API

O arquivo ```saude-id-routes-insomnia``` presente no repositório, trata-se do arquivo JSON com as rotas para uso no Insomnia.

## 👨‍🏫Instruções
Se deseja utilizar a API hospedada no Heroku, pode pular o trecho de configuração.<br>

### 👨‍💻Clonar projeto

-Clone o projeto na sua máquina; <br>
-Com o projeto clonado, realize a instalação das dependências.<br>

### ⚙Configurando 

-Nas variáveis ambientes há todas as configurações necessárias para executar a api de forma local.<br>
-Se executar de forma local, é importante ter o MongoDB instalando para o funcionamento do banco de dados.<br>
-A conexão com o MongoDB local já está estabelecida caso não utilize o deploy feito através do Heroku.<br>
-Se preferir utilizar um cluster personalizado através do MongoDB Atlas, forneça a URL necessária no arquivo ```.env```.<br>
-Caso deseje utilizar a API através do heroku basta acessar o seguinte endereço: ```https://posts-blog-api.herokuapp.com/```. <br>
-Lembre-se de checar os scripts no ```package.json``` caso execute um servidor local.

### 💻🖱Testando rotas

#### Criando de usuário

```JSON

{
	"name": "Rodrigo Carmo",
	"email": "rodrigo@example.com",
	"password": "12345678"
}

```


#### Autenticando usuário
-Nesta rota você deve enviar a requisição do tipo **POST** para a rota: <br>
```http://localhost:3392/users/auth``` ou ```https://posts-blog-api.herokuapp.com/users/auth```, feito isso, será retornado o token com algumas informações do usuário.<br>. 
Segue o JSON como exemplo: <br>

```JSON

{
	"email": "rodrigo@example.com",
	"password": "12345678"
}

```

#### Atualizando usuário

-Para atualizar o usuário, faça um requisição do tipo **PUT** para a rota: ```http://localhost:3392/users/:_id``` <br>
ou ```https://posts-blog-api.herokuapp.com/users/:_id```, passando um JSON no corpo da requisição, como o seguinte exemplo: 


```JSON

{
	"name": "Rodrigo",
  	"email": "rodrigo@example.com",
	"password": "12345678"
}

```

#### Deletando usuário
-Para deletar o usuário, faça um requisição do tipo **DELETE** para a rota: <br>
```http://localhost:3392/users``` ou ```https://posts-blog-api.herokuapp.com/users```, <br>
passando um JSON no corpo da requisição, como o seguinte exemplo: 

```JSON

{
	"_id": "619a5a5e8a8683a00a9c6db8"
}

```

#### Listando usuários
-Para listar um usuário pelo ID acesse a rota com o método **GET**: ```http://localhost:3392/users/:_id``` <br>
ou ```https://posts-blog-api.herokuapp.com/users/:_id```. <br>
-Para listar por email acesse a rota com o método **GET**: ```http://localhost:3392/users``` <br>
ou ```https://posts-blog-api.herokuapp.com/users```. Com o seguinte JSON como exemplo:

```JSON

{
	"email": "rodrigo@example.com"
}

```

-Listar todos os usuários com o método **GET** na seguinte rota: ```http://localhost:3392/users/all``` ou ```https://posts-blog-api.herokuapp.com/users/all```.

#### Criando posts
Para criar postagens é necessário estar autenticado com um usuário válido.<br>
-Crie uma postagem na seguinte rota do tipo **POST**: ```http://localhost:3392/posts``` <br>
ou ```https://posts-blog-api.herokuapp.com/posts```. Exemplo em JSON: 


```JSON

{
	"author": "619a5c26e252ca40d4ca85db",
	"title": "Teste",
	"description": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
	"categories": ["alimentos", "receitas", "cozinha"]
}

```
O campo "author" deve ser o ID de um usuário válido.

#### Deletando posts

-Para deletar um post, faça um requisição do tipo **DELETE** para a rota: <br>
```http://localhost:3392/post``` ou ```https://posts-blog-api.herokuapp.com/posts```, <br>
enviando o ID da postagem em um JSON no corpo da requisição, como o seguinte exemplo: 

```JSON

{
	"_id": "619a5a5e8a8683a00a9c6db8"
}

```

#### Atualizando posts

-Para atualizar o usuário, faça um requisição do tipo **PUT** para a rota: ```http://localhost:3392/posts/:_id``` <br>
ou ```https://posts-blog-api.herokuapp.com/posts/:_id```, com o ID nos parâmetros de rota, passando um JSON no corpo da requisição, como o seguinte exemplo: 


```JSON

{
	"title": "Lorem Ipsum",
	"categories": ["Lorem"],
	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
}

```


#### Listando posts
-Para listar um post pelo ID acesse a rota com o método **GET**: ```http://localhost:3392/posts/:_id```ou ```https://posts-blog-api.herokuapp.com/posts/:_id```.
-Listar todos os usuários com o método **GET** na seguinte rota: ```http://localhost:3392/posts/all```ou ```https://posts-blog-api.herokuapp.com/posts/all```.


### 🔗Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:<br>

- [Node.js](https://nodejs.org/en/)
- [Javascript](https://www.javascript.com/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)
- [ESLint](https://eslint.org/)
- [Express](https://expressjs.com/pt-br/)
- [Heroku](https://www.heroku.com/)


