import { Component, h } from '@stencil/core';

@Component({
  tag: 'no-data-component',
  styleUrl: 'no-data-component.css',
  shadow: true,
})
export class Loading {
  render() {
    return (
      <div class="min-h-screen flex flex-col justify-center sm:py-12">
        <div class="flex flex-col text-center w-full">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Shipment not found</h1>
          <p class="text-gray-500">Please try again after some time if the shipment is dispatched by today.</p>
        </div>
        <div class="object-contain md:object-scale-down flex justify-center">
          <img src="../../../assets/empty.png" />
        </div>
      </div>
    );
  }
}
