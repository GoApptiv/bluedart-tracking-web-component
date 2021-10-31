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
    if (this.loading) {
      return <loading-component />;
    }

    return (
      <div>
        {this.data.shipmentStatus == 'NO_INFO' && <no-data-component />}
        {this.data.shipmentStatus !== 'NO_INFO' && <shipment-meta-component data={this.data} />}
        <div class="container px-5 py-12 mx-auto">
          <div>{this.data.shipmentStatus !== 'NO_INFO' && this.checkpoints && <shipment-checkpoints-component checkpoints={this.data.checkpoints} />}</div>
        </div>
      </div>
    );
  }
}
