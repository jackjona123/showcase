# Jack Jona's Project Showcase

A showcase website for my projects built with Gatsby.

## Software & Resources

- React
- Gatsby
- Gatsby Plugins
- Styled Components

## Changelog

### Changes:

- Fixed some broken links. 
- Added new Modern Apparel Screenshot
- Added Blueprint Design Website
- Added `display: none;` to mobile header (it was overlapping other elements on scroll)

### Notes: Screenshots take with [Site-Shot](https://www.site-shot.com) *Original Size:* 2048 x 1536 pixels

- Added new sites (deployments.jackjona.ga was the lastest)

- Changed ```Navbar.js``` to fix header transparency bug on mobile screens

*From:*

  padding: 3 0;
  margin: 0 auto;
  position: fixed;
  background-color: navbar-bg;
  box-shadow: soft;
  top: 0;
  left: 0;
  right: 0;
  height: 60;
  z-index: 200;
  backdrop-filter: blur(8px);

*To:*

  padding: 0;
  margin: 0 auto;
  position: fixed;
  background-color: navbar-bg;
  box-shadow: soft;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 200;
  backdrop-filter: blur(8px);