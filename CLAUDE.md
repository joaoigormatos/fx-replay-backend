# CLAUDE.md - Backend

## Comandos

```bash
npm run start:dev       # Dev server com watch mode (porta 3001)
npm test                # Rodar testes unitarios
npm run test:watch      # Testes em watch mode
npm run test:cov        # Testes com cobertura
npm run prisma:generate # Gerar Prisma Client
npm run prisma:migrate  # Rodar migrations
docker-compose up -d    # Subir PostgreSQL
```

## Estrutura do Projeto

```
src/
  main.ts                          # Bootstrap, CORS, Swagger, porta 3001
  app.module.ts                    # Modulo raiz
  prisma/
    prisma.module.ts               # Modulo global do Prisma
    prisma.service.ts              # PrismaClient wrapper
  trade-order/
    trade-order.module.ts
    trade-order.controller.ts      # Endpoints REST com Swagger decorators
    trade-order.service.ts         # Logica de negocio, validacao, CRUD
    market-prices.ts               # Precos de mercado estaticos
    dto/
      create-trade-order.dto.ts    # DTO de criacao com class-validator
      update-trade-order.dto.ts    # DTO de atualizacao (todos campos opcionais)
    handlers/
      order-handler.interface.ts   # Interface OrderHandler
      limit-order.handler.ts       # Validacao: buy < market, sell > market
      market-order.handler.ts      # Sem validacao de preco
      stop-order.handler.ts        # Validacao: buy > market, sell < market
```

## Convencoes

- TDD obrigatorio: testes primeiro, depois implementacao
- Soft delete: usar `deletedAt` em vez de remover registros
- Todas as queries filtram `where: { deletedAt: null }`
- Strategy pattern para validacao por tipo de ordem (handlers/)
- DTOs usam class-validator + Swagger decorators
- Controller usa ValidationPipe com `whitelist: true, forbidNonWhitelisted: true`
- Prisma retorna Decimal; o service converte para number via `serialize()` antes de responder

## Banco de Dados

- PostgreSQL via Docker (porta 14000)
- Conexao: `postgresql://order_user:order_pass@localhost:14000/order_db`
- Schema Prisma em `prisma/schema.prisma`

## Testes

- Jest 30 com ts-jest
- Prisma mockado via `mockPrisma` nos testes de service
- Handlers testados diretamente (funcoes puras)
- Controller testado com mocks do service
- Mock do `@prisma/client` em `test/__mocks__/prisma-client.ts`
- `moduleNameMapper` no Jest config resolve imports `.js` para TS
