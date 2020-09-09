import { UserAudit } from './user-audit.model';

export abstract class Metadata {
  public _id?: string;

  public get id(): string | undefined {
    return this._id;
  }

  public createdBy: UserAudit;
  public createdDate: Date;
  public modifiedBy?: UserAudit;
  public modifiedDate?: Date;
}
