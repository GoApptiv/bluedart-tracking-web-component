import { Component, Prop, State, h } from '@stencil/core';
import { Result } from '../../../domain/models/result';
import { Shipment } from '../../../domain/models/shipment';
import { GetShipmentDetails } from '../../../domain/usages/get-shipment-details';

@Component({
  tag: 'shipment-component',
  styleUrl: 'shipment-component.css',
  shadow: true,
})
export class ShipmentComponent {
  /**
   * Get Shipment details
   */
  @Prop() getShipmentDetails: GetShipmentDetails;

  /**
   * The tracking number
   */
  @Prop() trackingNumber: string;

  /**
   * The checkpoints
   */
  @Prop() checkpoints: boolean;

  /**
   * loading
   */
  @State() loading: boolean;

  /**
   * shipment data
   */
  @State() data: Shipment;

  /**
   * When component loads
   * fetch shipment details
   *
   * @returns
   */
  componentWillLoad() {
    this.fetchShipmentDetails();
  }

  /**
   * Fetch account transactions
   */
  fetchShipmentDetails = async () => {
    this.loading = true;
    let result: Result = await this.getShipmentDetails.get({ trackingNumber: this.trackingNumber, checkpoints: this.checkpoints });
    if (result) {
      this.data = result.data;
    }
    this.loading = false;
  };

  render() {
    return (
      <div>
        <shipment-meta-component />
        <shipment-checkpoints-component />
        {this.loading && <loading-component />}
        {this.data.shipmentStatus == 'NO_INFO' && <no-data-component />}
      </div>
    );
  }
}
