import { Component, h } from '@stencil/core';

@Component({
  tag: 'loading-component',
  styleUrl: 'loading-component.css',
  shadow: true,
})
export class Loading {
  render() {
    return (
      <div class="container flex px-5 py-12 mx-auto">
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto ">
          <div class="animate-pulse flex space-x-4 p-6">
            <div class="flex-1 space-y-4 py-1">
              <div class="h-4 bg-blue-400 rounded w-3/4"></div>
              <div class="space-y-2">
                <div class="h-4 bg-blue-400 rounded"></div>
                <div class="h-4 bg-blue-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
