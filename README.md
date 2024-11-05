## Trading pair service

The Trading Pair Data API is designed to provide historical market data for cryptocurrency or financial trading platforms. It delivers comprehensive information on trading pairs, including order book details and ticker info, to power analytics, trading strategies, and market insights for users or connected applications.

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
