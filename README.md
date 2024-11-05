## RatherLabs NodeJS test

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Endpoints

| Url                                             | Method | Return Type         | Description                                    |
| ----------------------------------------------- | ------ | ------------------- | ---------------------------------------------- |
| /trading-pair/{trading_pair}                    | GET    | `TradingPairDto`    | Returns trading pair orderbook and ticker info |
| /trading-pair/{trading_pair}/{size}/{operation} | GET    | `OperationPriceDto` | Returns trading-pair operation price           |
