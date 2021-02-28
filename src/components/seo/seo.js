import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { useSiteMetadata } from "../../hooks"

const HTTP = "http://"
const HTTPS = "https://"

function SEO({
  lang,
  pageTitle,
  pageType,
  pageUrl,
  pageDescription,
  pageImage,
  pageImageAlt,
}) {
  const defaultMeta = useSiteMetadata()
  // TODO: Type, title card, image, image alt are dynamic
  const metaValues = {
    lang: lang ? lang : defaultMeta.lang,
    title: pageTitle ? pageTitle : defaultMeta.title,
    type: pageType ? pageType : defaultMeta.type,
    url: `${HTTPS}${pageUrl ? pageUrl : defaultMeta.baseUrl}`,
    description: pageDescription ? pageDescription : defaultMeta.description,
    image: `${defaultMeta.baseUrl}${pageImage ? pageImage : defaultMeta.logo}`,
    imageAlt: pageImageAlt ? pageImageAlt : defaultMeta.imageAlt,
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={metaValues.title}
        titleTemplate={`%s | ${defaultMeta.title}`}
        description={metaValues.description}
      >
        <link rel="canonical" href={metaValues.url} />
        <link rel="alternate" href={defaultMeta.siteUrl} hreflang="en-us" />
        <link rel="alternate" href={defaultMeta.siteUrl} hreflang="en-gb" />
        <meta name="title" content={metaValues.title} />
        <meta name="description" content={metaValues.description} />
        <meta name="subject" content={defaultMeta.subject} />
        <meta name="robots" content="index,follow" />
        {/* ? to be set by blog post page? */}
        <meta name="topic" content="" />
        <meta name="summary" content="" />
        <meta name="monetization" content={defaultMeta.coil} />
      </Helmet>
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  pageTitle: `Home`,
  pageType: `app`,
  pageUrl: ``,
  pageDescription: ``,
  pageImage: ``,
  pageImageAlt: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  pageTitle: PropTypes.string,
  pageType: PropTypes.string,
  pageUrl: PropTypes.string,
  pageDescription: PropTypes.string,
  pageImage: PropTypes.string,
  pageImageAlt: PropTypes.string,
}

export default SEO
