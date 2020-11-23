export interface IResponse<Data = {}> {
  code: number;
  message: string;
  payload: Data;
  stack?: string;
}
