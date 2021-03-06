import { Component, h, Prop } from '@stencil/core';
import { Shipment } from '../../../domain/models/shipment';
import { Utils } from '../../../utils/utils';

@Component({
  tag: 'shipment-meta-component',
  styleUrl: 'shipment-meta-component.css',
  shadow: true,
})
export class ShipmentMeta {
  /**
   * The shipment details
   */
  @Prop() data: Shipment;

  MetaContainer = (props, children) => {
    return (
      <div class="p-2 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          {children}
          <h2 class="title-font font-medium text-2xl text-gray-900">{props.data}</h2>
          <p class="leading-relaxed">{props.title}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <section class="text-gray-600 body-font content-center">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Shipment Tracking Details - {this.data.trackingId}</h1>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <this.MetaContainer title={'Status'} data={Utils.capitalizeFirstLetter(this.data.shipmentStatus)}>
              <svg
                fill="none"
                stroke={this.data.shipmentStatus === 'DELIVERED' ? '#4caf50' : 'currentColor'}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-blue-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                {this.data.shipmentStatus === 'DELIVERED' ? (
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ) : (
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                )}
              </svg>
            </this.MetaContainer>
            <this.MetaContainer title={'Pickup Date'} data={this.data.pickupDate}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-blue-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </this.MetaContainer>
            <this.MetaContainer title={'Origin'} data={Utils.capitalizeFirstLetter(this.data.origin)}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-blue-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>
            </this.MetaContainer>
            <this.MetaContainer title={'Destination'} data={Utils.capitalizeFirstLetter(this.data.destination)}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-blue-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </this.MetaContainer>
            <this.MetaContainer title={'Consignee'} data={Utils.capitalizeFirstLetter(this.data.consigneeName)}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-blue-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </this.MetaContainer>
            {this.data.receivedBy !== null ? (
              <this.MetaContainer title={'Received By'} data={Utils.capitalizeFirstLetter(this.data.receivedBy)}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-blue-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </this.MetaContainer>
            ) : (
              <this.MetaContainer title={'Expected Delivery Date'} data={this.data.expectedDeliveryDate}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-blue-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </this.MetaContainer>
            )}
            <this.MetaContainer title={'Weight'} data={this.data.weight}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-blue-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </this.MetaContainer>
            <this.MetaContainer title={'Last status update'} data={this.data.shipmentStatusDate}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-blue-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </this.MetaContainer>
          </div>
        </div>
      </section>
    );
  }
}
