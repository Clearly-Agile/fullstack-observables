import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { ApiModel } from '@libs/models/core';
import { Logger } from '@nestjs/common/services';

export abstract class ApiClientController<TModel extends ApiModel> {
    readonly #connection: AmqpConnection;
    readonly #logger: Logger = new Logger(this.constructor.name);

    /**
     * Gets a logger for the current Controller<TModel>.
     */
    protected get logger(): Logger {
        return this.#logger;
    }
    /**
     * Gets the current AmqpConnection provider.
     */
    protected get connection():AmqpConnection {
        return this.#connection;
    }
    
    constructor(connection: AmqpConnection) {
        this.#connection = connection;
    }
}