export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ea6e86fad0ee601c1866c74',
                  title: 'Sanity Studio',
                  name: 'mlynskey-studio',
                  apiId: 'c72b85ec-690b-42b7-b1f8-fbd1cf90f965'
                },
                {
                  buildHookId: '5ea6e86fad0ee601c1866c75',
                  title: 'Portfolio Website',
                  name: 'mlynskey',
                  apiId: '20a84276-e2c9-496f-a14d-2f04730458d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leightongrantham/mlynskey',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://mlynskey.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
