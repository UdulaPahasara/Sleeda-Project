import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteUrl = 'https://sledaa.com';
  const defaultImage = '/src/assets/logo/logo.webp'; // Fallback to logo if no specific image is provided
  const seoImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}${defaultImage}`;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title ? `${title} | Sledaa` : 'Sledaa'}</title>
      <meta name="description" content={description || 'Sledaa - Sri Lanka Engineering Draftsman Alumni Association'} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={title || 'Sledaa'} />
      <meta property="og:description" content={description || 'Sledaa - Sri Lanka Engineering Draftsman Alumni Association'} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={title || 'Sledaa'} />
      <meta name="twitter:description" content={description || 'Sledaa - Sri Lanka Engineering Draftsman Alumni Association'} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;
