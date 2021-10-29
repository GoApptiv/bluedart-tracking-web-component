import { Result } from "../../domain/models/result";
import { GetShipmentDetails } from "../../domain/usages/get-shipment-details";
import { HttpPostClient } from "../protocols/http/http-post-client";

export class RemoteGetTrackingDetails implements GetShipmentDetails {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpPostClient,
  ) {}

  async get({trackingNumber, checkpoints}): Promise<Result> {
    const httpResponse = await this.httpGetClient.post({
      url: this.url,
      body: {
        trackingId: trackingNumber,
        checkpoints,
      },
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    return httpResponse;
  }
}
