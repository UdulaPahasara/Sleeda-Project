import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteUrl = 'https://sledaa.com';
  const defaultImage = '/src/assets/logo/logo.webp'; // Fallback to logo if no specific image is provided
  const seoImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}${defaultImage}`;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultDescription = 'SLEDAA - Sri Lankan Engineering Diplomates Association of Australia';

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sri Lankan Engineering Diplomates Association of Australia",
    "alternateName": "SLEDAA",
    "url": siteUrl,
    "logo": `${siteUrl}${defaultImage}`,
    "description": defaultDescription
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title ? `${title} | Sledaa` : 'Sledaa'}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={seoUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={title || 'Sledaa'} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={title || 'Sledaa'} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;
