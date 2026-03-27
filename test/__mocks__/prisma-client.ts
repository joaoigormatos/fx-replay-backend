export class PrismaClient {
  $connect = jest.fn();
  $disconnect = jest.fn();
  tradeOrder = {
    create: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };
}
