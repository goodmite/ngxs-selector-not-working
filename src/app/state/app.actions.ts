export class SaveVersionSuccess {
  static readonly type = '[code input] save bot Versions success';
  constructor(public payload: { bot:any, version: any}) {}
}