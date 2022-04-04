import webflow from "../../webflow.app.mjs";

export default {
  key: "webflow-create-collection-item",
  name: "Create Collection Item",
  description: "Create new collection item",
  version: "0.2.1",
  type: "action",
  props: {
    webflow,
    siteId: {
      propDefinition: [
        webflow,
        "sites",
      ],
      optional: true,
    },
    collectionId: {
      propDefinition: [
        webflow,
        "collections",
        (c) => ({
          siteId: c.siteId,
        }),
      ],
    },
    live: {
      label: "Live",
      description: "Indicate if the item should be published to the live site",
      type: "boolean",
      default: false,
    },
    name: {
      label: "Name",
      description: "Name given to the Item.",
      type: "string",
    },
    slug: {
      label: "Slug",
      description: "URL structure of the Item in your site.",
      type: "string",
    },
  },
  async run() {
    const webflow = this.webflow._createApiClient();

    return await webflow.createItem({
      collectionId: this.collectionId,
      fields: {
        name: this.name,
        slug: this.slug,
        _archived: false,
        _draft: false,
      },
    }, {
      live: this.live,
    });
  },
};
