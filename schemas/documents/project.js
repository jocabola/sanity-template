import seo from '../blocks/seo'


export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    seo,
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
  ]
}