import seo from '../blocks/seo'

export default {
  name: 'generalSettings',
  title: 'General Settings',
  type: 'document',
  fields: [
    seo,
    {
      title: 'Site Logo',
      name: 'logo',
      type: 'image'
    },
	]
}