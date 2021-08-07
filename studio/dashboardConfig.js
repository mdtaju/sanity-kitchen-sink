export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '610ea8ab842ddba1af5fc27b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-88m7qdkz',
                  apiId: '59412b6c-6f55-4d30-81b5-90f42e861220'
                },
                {
                  buildHookId: '610ea8ab21756362a16a0308',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qravnce7',
                  apiId: '44935bda-996e-4e3e-8f0b-6d4e0b6d3d79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mdtaju/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qravnce7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
