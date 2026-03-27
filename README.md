# TradeX - Backend

API REST para gerenciamento de ordens de trade, construida com NestJS, Prisma e PostgreSQL.

## Requisitos

- Node.js >= 20.19
- Docker (para PostgreSQL)

## Setup

```bash
# Instalar dependencias
npm install

# Subir o banco de dados
docker-compose up -d

# Gerar o Prisma Client
npm run prisma:generate

# Rodar as migrations
npm run prisma:migrate
```

## Executando

```bash
# Desenvolvimento (watch mode)
npm run start:dev

# Producao
npm run build
npm run start:prod
```

O servidor sobe em `http://localhost:3001`.

A documentacao Swagger fica disponivel em `http://localhost:3001/api`.

## Testes

```bash
# Testes unitarios
npm test

# Watch mode
npm run test:watch

# Com cobertura
npm run test:cov
```

## Endpoints

| Metodo | Rota              | Descricao                |
| ------ | ----------------- | ------------------------ |
| POST   | /trade_orders     | Criar nova ordem         |
| GET    | /trade_orders     | Listar ordens (paginado) |
| GET    | /trade_orders/:id | Buscar ordem por ID      |
| PUT    | /trade_orders/:id | Atualizar ordem          |
| DELETE | /trade_orders/:id | Soft delete de uma ordem |

### Paginacao

`GET /trade_orders?page=1&offset=10`

Resposta:

```json
{
  "data": [],
  "page": 1,
  "offset": 10,
  "totalPages": 5
}
```

## Modelo TradeOrder

| Campo     | Tipo     | Descricao                             |
| --------- | -------- | ------------------------------------- |
| id        | UUID     | Identificador unico                   |
| side      | string   | `buy` ou `sell`                       |
| type      | string   | `limit`, `market` ou `stop`           |
| amount    | decimal  | Quantidade (max 2 casas decimais)     |
| price     | decimal  | Preco (max 5 casas decimais)          |
| pair      | string   | Par de trade (BTCUSD, EURUSD, ETHUSD) |
| status    | string   | `open`, `cancelled` ou `executed`     |
| createdAt | datetime | Data de criacao                       |
| updatedAt | datetime | Data de atualizacao                   |
| deletedAt | datetime | Data de exclusao (soft delete)        |

## Regras de Validacao de Preco

- **Limit Buy**: preco < preco de mercado
- **Limit Sell**: preco > preco de mercado
- **Stop Buy**: preco > preco de mercado
- **Stop Sell**: preco < preco de mercado
- **Market**: sem validacao de preco

### Precos de Mercado

| Par    | Preco     |
| ------ | --------- |
| BTCUSD | 100150.40 |
| EURUSD | 1.035     |
| ETHUSD | 3310.00   |

## Stack

- [NestJS](https://nestjs.com/) 11
- [Prisma](https://www.prisma.io/) 6
- [PostgreSQL](https://www.postgresql.org/)
- [class-validator](https://github.com/typestack/class-validator)
- [Swagger/OpenAPI](https://swagger.io/)
- [Jest](https://jestjs.io/) 30
