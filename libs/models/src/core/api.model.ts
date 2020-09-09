import { Metadata } from './metadata.model';

export abstract class ApiModel {
  public _id?: string;

  public get id(): string | undefined {
    return this._id;
  }

  public metadata?: Metadata;
}
