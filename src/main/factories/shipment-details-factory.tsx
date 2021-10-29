import { Component, Prop, h } from '@stencil/core';
import { RemoteGetTrackingDetails } from '../../data/usecases/remote-get-shipment-details';
import { FetchHttpClient } from '../../infra/http/fetch-http-client';

@Component({
  tag: 'shipment-details-factory',
  shadow: true,
})
export class ShipmentDetailsFactory {

  @Prop() trackingNumber: string;
  @Prop() checkpoints: boolean = false;

  render() {
    let httpClient = FetchHttpClient.getInstance();
    const getShipmentDetails = new RemoteGetTrackingDetails(
      `https://us-central1-common-project-goapptiv.cloudfunctions.net/getBluedartShipmentStatus`,
      httpClient,
    );

    return <shipment-component getShipmentDetails={getShipmentDetails} trackingNumber={this.trackingNumber} checkpoints={this.checkpoints}/>;
  }
}
