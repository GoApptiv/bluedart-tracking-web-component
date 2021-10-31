import { Component, h, Prop } from '@stencil/core';
import { Checkpoint } from '../../../domain/models/checkpoint';
import { Utils } from '../../../utils/utils';

@Component({
  tag: 'shipment-checkpoints-component',
  styleUrl: 'shipment-checkpoints-component.css',
  shadow: true,
})
export class ShipmentCheckpoints {
  /**
   * The shipment checkpoints.
   */
  @Prop() checkpoints: Checkpoint[];

  render() {
    return (
      <div class="content-center">
        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto flex flex-wrap">
            <div class="flex flex-wrap w-full">
              <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                {this.checkpoints.map((c, index) => {
                  if (index === this.checkpoints.length - 1) {
                    return (
                      <div class="flex relative">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                          </svg>
                        </div>
                        <div class="flex-grow pl-4">
                          <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{c.scan}</h2>
                          <p class="leading-relaxed">
                            {c.scanDate} {c.scanTime}
                          </p>
                          <p class="leading-relaxed">{Utils.capitalizeFirstLetter(c.scannedLocation)}</p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div class="flex relative pb-12">
                      <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                        {c.checkpointState !== 'DELIVERED' ? (
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                        )}
                      </div>
                      <div class="flex-grow pl-4">
                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{c.scan}</h2>
                        <p class="leading-relaxed">
                          {c.scanDate} {c.scanTime}
                        </p>
                        <p class="leading-relaxed">{Utils.capitalizeFirstLetter(c.scannedLocation)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
