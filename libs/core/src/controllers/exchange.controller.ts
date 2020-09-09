import { ApiModel } from '@libs/models/core';
import { Logger } from '@nestjs/common';

export class ExchangeController<TModel extends ApiModel> {
    readonly #logger: Logger = new Logger(this.constructor.name);
   
    /**
     * Gets a logger for the current Controller<TModel>.
     */
    protected get logger(): Logger {
        return this.#logger;
    }


}