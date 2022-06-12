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
                  buildHookId: '62a5cb2e552b2d4a86719615',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-46sszrn6',
                  apiId: 'dfcbbb4e-4a3f-4365-8c0e-3b0d34089afd'
                },
                {
                  buildHookId: '62a5cb2e863c2a4f46718740',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yt6g81mr',
                  apiId: 'ff1891a2-fa32-46fb-8b40-a9048ef66e47'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ozanyeni/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yt6g81mr.netlify.app',
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
