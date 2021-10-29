import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bluedart-tracking-component',
  styleUrl: 'bluedart-tracking-component.css',
  shadow: true,
})
export class BluedartTracking {

  /**
  * The tracking number
  */
  @Prop() trackingNumber: string;

  /**
   * The checkpoints
   */
  @Prop() checkpoints: boolean = false;

  render() {
    return <shipment-details-factory tracking-number={this.trackingNumber} checkpoints={this.checkpoints} />;
  }
}
