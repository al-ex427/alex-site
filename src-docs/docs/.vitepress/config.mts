import { defineConfig, loadEnv } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig(({mode}) =>{
  const env = loadEnv(mode, process.cwd(), '');

  return {
 title: "Alex's Site - Docs",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: env.ALGOLIA_APPID,
        apiKey: env.ALGOLIA_SEARCH_APIKEY,
        indexName: env.ALGOILA_INDEX
      }
    } ,

    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: "Home",
        link: "/"
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
  }
 
})
