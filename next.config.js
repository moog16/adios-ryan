/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const basePath = ''
const distDir = 'build'

module.exports = (phase, { defaultConfig }) => {
  const config = withBundleAnalyzer({
    ...defaultConfig,
    basePath,
    distDir,
    images: {
      domains: ['storage.googleapis.com', 'drive.google.com'],
    },
    webpack: (config, options) => {
      // In `pages/_app.js`, Sentry is imported from @sentry/browser. While
      // @sentry/node will run in a Node.js environment. @sentry/node will use
      // Node.js-only APIs to catch even more unhandled exceptions.
      //
      // This works well when Next.js is SSRing your page on a server with
      // Node.js, but it is not what we want when your client-side bundle is being
      // executed by a browser.
      //
      // Luckily, Next.js will call this webpack function twice, once for the
      // server and once for the client. Read more:
      // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
      //
      // So ask Webpack to replace @sentry/node imports with @sentry/browser when
      // building the browser's bundle

      // When all the Sentry configuration env variables are available/configured
      // The Sentry webpack plugin gets pushed to the webpack plugins to build
      // and upload the source maps to sentry.
      // This is an alternative to manually uploading the source maps
      // Note: This is disabled in development mode.

      return config
    },
  })

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...config,
      /* development only config options here */
    }
  }

  /* config options for all phases except development here */
  return {
    ...config,
    productionBrowserSourceMaps: true,
  }
}
