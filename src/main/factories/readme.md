# shipment-details-factory



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type      | Default     |
| ---------------- | ----------------- | ----------- | --------- | ----------- |
| `checkpoints`    | `checkpoints`     |             | `boolean` | `false`     |
| `trackingNumber` | `tracking-number` |             | `string`  | `undefined` |


## Dependencies

### Used by

 - [bluedart-tracking-component](../../presentation/components/bluedart-tracking)

### Depends on

- [shipment-component](../../presentation/components/shipment)

### Graph
```mermaid
graph TD;
  shipment-details-factory --> shipment-component
  bluedart-tracking-component --> shipment-details-factory
  style shipment-details-factory fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
