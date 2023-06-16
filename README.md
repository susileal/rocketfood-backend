# Food Explorer - API

Este é um projeto/API que oferece funcionalidades relacionadas a um sistema de entrega para restaurantes. Faz parte do projeto final do curso Explorer da RocketSeat.

## 1. Link para o produto em produção
[rocketfood-backend-api](http:localhost:3333/)

## 2. Caso queira rodar localmente

### Instalação

1. Clone o repositório do projeto.
2. Navegue até o diretório do projeto.
3. Execute o seguinte comando para instalar as dependências:

npm install

### Configuração do Banco de Dados

1. Rodar o comando para a criação das tabelas: 
`$ npm run migrate`

2. Rodar o comando para populara a tabela de usuário e categoria: 
`$ npx knex seed:run`

Obs: Será inserido um usuário Administrador que será utilizado para edição dos pratos:
```
name: 'Admin',
email: 'admin@admin.com'
senha: 123456
```

### Uso

1. Inicie o servidor executando o seguinte comando:
`npm run dev`

## 3. Rotas

### 3.1 Usuários / Sessão

- `POST /users` - Cria um novo usuário.
- `PUT /users` - Atualiza as informações de um usuário específico.
- `POST /sessions` - Cria uma sessão pro usuário (Login)

Exemplo de Request Body de criação do usuário:
```
{
	"name": "Susana",
	"email": "susana@gmail.com",
	"password": "123"
}
```

### 3.2 Pratos (Precisar passar o token bearer gerado no Login)

- `GET /dishes` - Retorna todos os pratos cadastrados.
- `GET /dishes?searchTerm=` - Pesquisa os pratos pelo nome e pelos ingredientes
- `GET /dishes/:id` - Retorna os detalhes de um prato específico.
- `POST /dishes` - Cria um novo prato.
- `PUT /dishes/:id` - Atualiza as informações de um prato específico.
- `PATCH /dishes/:id` - Atualiza a imagem do prato (MultiPart)
- `DELETE /dishes/:id` - Remove um prato específico.
- `GET dishes/categories/:category_id` - Retorna os pratos cadastrados na categoria informada

Exemplo de Request Body de criação/edição do prato:
```
{
	"name": "Macarrão",
	"description": "massas selecionadas",
	"ingredients":["molho", "tomate", "oregano"],
	"price": 35.00,
	"category_id": 1
}
```


### 3.3 Ingredientes (Precisar passar o token bearer gerado no Login)
- `GET /ingredients/:dish_id` - Retorna todos os ingredientes do prato informado.




