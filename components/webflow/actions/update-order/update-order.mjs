import webflow from "../../webflow.app.mjs";

export default {
  key: "webflow-update-order",
  name: "Update Order",
  description: "Update a order",
  version: "0.0.1",
  type: "action",
  props: {
    webflow,
    siteId: {
      propDefinition: [
        webflow,
        "sites",
      ],
    },
    orderId: {
      propDefinition: [
        webflow,
        "orders",
      ],
    },
    comment: {
      label: "Comment",
      description: "Arbitrary data for your records.",
      type: "string",
      optional: true,
    },
    shippingProvider: {
      label: "Shipping Provider",
      description: "Company or method used to ship order.",
      type: "string",
      optional: true,
    },
    shippingTracking: {
      label: "Shipping Tracking",
      description: "Tracking number for order shipment.",
      type: "string",
      optional: true,
    },
  },
  async run({ $ }) {
    const {
      comment,
      shippingProvider,
      shippingTracking,
    } = this;

    return this.webflow._makeRequest(`/sites/${this.siteId}/order/${this.orderId}`, {
      $,
      config: {
        method: "post",
        data: {
          fields: {
            comment,
            shippingProvider,
            shippingTracking,
          },
        },
      },
    });
  },
};
