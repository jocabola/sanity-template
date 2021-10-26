import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import defaultBlockContent from './blocks/defaultBlockContent'

import generalSettings from './documents/generalSettings'
import home from './documents/home'
import project from './documents/project'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    defaultBlockContent,
    generalSettings,
    home,
    project
  ]),
})
