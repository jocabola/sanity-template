export default {
  widgets: [
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'small'}
    },
    {
      name: 'netlify',
      options: {
        title: 'Deploy Netlify',
        // sites: [
        //   {
        //       title: 'Deploy Web',
        //       apiId: '1589ec0f-b699-4116-9271-e39bebcd9f98',
        //       buildHookId: '5fd86653db111a8b44cdfbb3',
        //       name: 'masmadrenas',
        //   },
        // ]
      }
    },
    {
      name: 'project-users',  
      title: 'Users',
      layout: {height: 'auto'}
    }
  ]
}