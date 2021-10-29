import { Result } from "../models/result";

export interface GetShipmentDetails {
  get(params: GetShipmentDetails.Params): Promise<Result>;
}

export namespace GetShipmentDetails {
  export type Params = {
    trackingNumber: string;
    checkpoints: boolean;
  }
}
