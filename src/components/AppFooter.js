import React from 'react'
import styled from '@xstyled/styled-components'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { Container } from './Container'

const Copyright = styled.div`
  font-size: 14;
`

const Socials = styled.div`
  margin-left: auto;
  margin-right: -2;
  display: flex;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44;
  width: 44;
  color: lighter;
  transition: base;

  &:hover,
  &:focus {
    outline: none;
    color: accent;
  }
`
const currentYear = new Date().getFullYear()

export function AppFooter() {
  return (
    <Container display="flex" alignItems="center" mt={4} pb={4}>
      <Copyright>
         © {currentYear} Jack Jona <br />

      </Copyright>
      <Socials>
        <SocialLink
          title="GitHub"
          href="https://github.com/jackjona123"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink title="Twitter" href="https://twitter.com/jackjona123">
          <FaTwitter />
        </SocialLink>
      </Socials>
    </Container>
  )
}
