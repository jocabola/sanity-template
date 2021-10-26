export default {
  name: "seo",
  type: "object",
  title: "Seo Fields",
  fields: [
    {
      title: "Page Title",
      name: "title",
      type: "string",
    },
    {
      title: "SEO Description",
      name: "description",
      type: "text",
      rows: 1,
    },
    {
      title: "Share Image",
      type: "image",
      name: "seo_image",
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};