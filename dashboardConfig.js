export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6128f0c6895632e505376133',
                  title: 'Martí Verdaguer Site',
                  name: 'marti-vm',
                  apiId: 'ee07c3c4-ab6e-4d2f-8b25-8c861659b957'
                }
              ]
            }
          }
        ],
      }
    },
    {
      name: 'project-users',  
      title: 'Users',
      layout: {
        height: 'auto'
      }
    }
  ]
}