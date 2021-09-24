import React from 'react'
import gatsbyLogo from '../images/ssg/gatsby.svg'
import reactLogo from '../images/ssg/react.svg'

export function getSSGInfos(name, template) {
  switch (name) {
    case 'Gatsby':
      return {
        logo: gatsbyLogo,
        website: 'https://www.gatsbyjs.com/',
        features: [
        ],
        logo: reactLogo,
        website: 'https://reactjs.org',
        features: [
        ],
      }
    default:
      return null
  }
}
