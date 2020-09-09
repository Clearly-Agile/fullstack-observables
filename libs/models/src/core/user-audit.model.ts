export abstract class UserAudit {
  public _id: string;

  public get id(): string {
    return this._id;
  }
  public userId: string;
  public name: string;
  public userName: string;
}
