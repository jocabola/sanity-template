import seo from '../blocks/seo'


export default {
  name: 'home',
  title: 'Home Page',
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