# Food Explorer - API

Este é um projeto/API que oferece funcionalidades relacionadas a um sistema de entrega para restaurantes. Faz parte do projeto final do curso Explorer da RocketSeat.

## 1. Link para o produto em produção
<link>

## 2. Caso queira rodar localmente

### Instalação

1. Clone o repositório do projeto.
2. Navegue até o diretório do projeto.
3. Execute o seguinte comando para instalar as dependências:

npm install

### Configuração

1. Renomeie o arquivo `.env.example` para `.env`.
2. Abra o arquivo `.env` e configure as variáveis de ambiente necessárias, como informações do banco de dados, porta do servidor, etc.

### Uso

1. Inicie o servidor executando o seguinte comando:
npm start

## 3. Rotas

### Usuários

- `GET /users` - Retorna todos os usuários cadastrados.
- `GET /users/:id` - Retorna os detalhes de um usuário específico.
- `POST /users` - Cria um novo usuário.
- `PUT /users/:id` - Atualiza as informações de um usuário específico.

### Pratos

- `GET /dishes` - Retorna todos os pratos cadastrados.
- `GET /dishes/:id` - Retorna os detalhes de um prato específico.
- `POST /dishes` - Cria um novo prato.
- `PUT /dishes/:id` - Atualiza as informações de um prato específico.
- `DELETE /dishes/:id` - Remove um prato específico.



