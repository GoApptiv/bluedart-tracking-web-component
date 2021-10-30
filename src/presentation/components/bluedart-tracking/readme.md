# bluedart-tracking



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description         | Type      | Default     |
| ---------------- | ----------------- | ------------------- | --------- | ----------- |
| `checkpoints`    | `checkpoints`     | The checkpoints     | `boolean` | `false`     |
| `trackingNumber` | `tracking-number` | The tracking number | `string`  | `undefined` |


## Dependencies

### Depends on

- [shipment-details-factory](../../../main/factories)

### Graph
```mermaid
graph TD;
  bluedart-tracking-component --> shipment-details-factory
  shipment-details-factory --> shipment-component
  shipment-component --> shipment-meta-component
  shipment-component --> loading-component
  shipment-component --> no-data-component
  style bluedart-tracking-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
