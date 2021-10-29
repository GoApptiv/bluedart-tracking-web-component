import { Component, Prop, h, State } from '@stencil/core';
import { Result } from '../../../domain/models/result';
import { Shipment } from '../../../domain/models/shipment';
import { GetShipmentDetails } from '../../../domain/usages/get-shipment-details';

@Component({
  tag: 'shipment-component',
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
        return this.fetchShipmentDetails();
    }

    /**
     * Fetch account transactions
     */
    async fetchShipmentDetails() {
        this.loading = true;
        let result: Result = await this.getShipmentDetails.get({trackingNumber: this.trackingNumber, checkpoints: this.checkpoints});
        if (result) {
            this.data = result.data;
        }
        this.loading = false;
    }

    render() {
        return <div>
          {!this.loading && <p>Loaded</p>}
          <p>{this.data.shipmentStatus}</p>
        </div>;
      }
}
