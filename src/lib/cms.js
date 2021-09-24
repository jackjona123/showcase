import wordpressLogo from '../images/cms/wordpress.svg'
import datoCMSLogo from '../images/cms/dato-cms.svg'
import netlifyCMSLogo from '../images/cms/netlify-cms.svg'
import vercelLogo from '../images/cms/vercel.svg'
import githubLogo from '../images/cms/github.svg'
import firebaseLogo from '../images/cms/firebase.svg'
import cloudflarePagesLogo from '../images/cms/cloudflare-pages.svg'
import contentfulLogo from '../images/cms/contentful.svg'
import markdownLogo from '../images/cms/markdown.svg'
import htmlLogo from '../images/cms/html.svg'
import reactLogo from '../images/ssg/react.svg'
import gatsbyLogo from '../images/ssg/gatsby.svg'
import nextjsLogo from '../images/ssg/next-js.svg'

export function getCMSInfos(name) {
  switch (name) {
    case 'React':
      return {
        logo: reactLogo,
        website: 'https://reactjs.org',
        title: 'Built With React',
        features: ['React'],
      }
    case 'Gatsby':
      return {
        logo: gatsbyLogo,
        website: 'https://www.gatsbyjs.com/',
        title: 'Built With Gatsby',
        features: ['Gatsby Server Side Rendering (SSR)'],
      }
    case 'Next':
      return {
        logo: nextjsLogo,
        website: 'https://nextjs.org',
        title: 'Built With Next.JS',
        features: ['Next.JS'],
      }
    case 'Markdown':
      return {
        logo: markdownLogo,
        website: 'https://daringfireball.net/projects/markdown/syntax',
        title: 'Compatible with Markdown',
        features: ['This project uses Markdown'],
      }
    case 'HTML':
      return {
        logo: htmlLogo,
        website: 'https://html.spec.whatwg.org',
        title: 'Built with pure HTML, CSS & JS',
        features: ['This project uses HTML, CSS & Javascript'],
      }
    case 'Wordpress':
      return {
        logo: wordpressLogo,
        website: 'https://www.wordpress.com/',
        title: 'Compatible with Wordpress',
        features: ['This project pulls content from Wordpress'],
      }
    case 'DatoCMS':
      return {
        logo: datoCMSLogo,
        website: 'https://www.datocms.com/',
        title: 'Compatible with DatoCMS',
        features: ['This project pulls content from DatoCMS'],
      }
    case 'Netlify':
      return {
        logo: netlifyCMSLogo,
        website: 'https://www.netlify.com/',
        title: 'Deployed To Netlify',
        features: ['This project is deployed to Netlify'],
      }
    case 'Vercel':
      return {
        logo: vercelLogo,
        website: 'https://www.Vercel.com/',
        title: 'Deployed To Vercel',
        features: ['This project is deployed to Vercel'],
      }
    case 'Cloudflare':
      return {
        logo: cloudflarePagesLogo,
        website: 'https://pages.cloudflare.com/',
        title: 'Deployed To Cloudflare Pages',
        features: ['This project is deployed to Cloudflare Pages'],
      }
    case 'Github':
      return {
        logo: githubLogo,
        website: 'https://pages.Github.com/',
        title: 'Deployed To Github Pages',
        features: ['This project is deployed to Github Pages'],
      }
      case 'Firebase':
      return {
        logo: firebaseLogo,
        website: 'https://firebase.com/',
        title: 'Uses Firebase',
        features: ['This project uses Firebase'],
      }
    case 'Contentful':
      return {
        logo: contentfulLogo,
        website: 'https://www.contentful.com/',
        title: 'Compatible with Contentful',
        features: ['This project pulls content from Contentful'],
      }
    default:
      return null
  }
}
