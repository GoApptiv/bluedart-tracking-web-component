import { Component, h } from '@stencil/core';

@Component({
  tag: 'no-data-component',
  styleUrl: 'no-data-component.css',
  shadow: true,
})
export class Loading {

  render() {
    return <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"><p>Shipment not found.</p></div>
    <div class="flex flex-wrap justify-center">
      <img src="../../../assets/empty.png" />
    </div>
  </div>;
  }
}
