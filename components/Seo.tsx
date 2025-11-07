
import React, { useEffect } from 'react';
import { businessInfo } from '../constants/businessInfo';
import { Breadcrumb } from '../types';

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImageUrl?: string;
  jsonLd?: object | object[];
  breadcrumbs?: Breadcrumb[];
}

const Seo: React.FC<SeoProps> = ({ title, description, canonicalUrl, ogType = 'website', ogImageUrl, jsonLd, breadcrumbs }) => {
  useEffect(() => {
    document.title = title;

    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name='${name}']`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setOgTag = (property: string, content: string) => {
        let element = document.querySelector(`meta[property='${property}']`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };
    
    setMetaTag('description', description);
    
    // Open Graph
    setOgTag('og:title', title);
    setOgTag('og:description', description);
    setOgTag('og:type', ogType);
    setOgTag('og:url', canonicalUrl);
    setOgTag('og:site_name', businessInfo.name);
    if(ogImageUrl) setOgTag('og:image', ogImageUrl);

    // Twitter Cards
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    if(ogImageUrl) setMetaTag('twitter:image', ogImageUrl);

    // Canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // JSON-LD
    const allJsonLd = [];
    if (jsonLd) {
        if (Array.isArray(jsonLd)) {
            allJsonLd.push(...jsonLd);
        } else {
            allJsonLd.push(jsonLd);
        }
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": `https://${businessInfo.domain}/`
                },
                ...breadcrumbs.map((crumb, index) => ({
                    "@type": "ListItem",
                    "position": index + 2,
                    "name": crumb.name,
                    "item": `https://${businessInfo.domain}/#${crumb.path}`
                }))
            ]
        };
        allJsonLd.push(breadcrumbSchema);
    }
    
    const scriptId = 'json-ld-schema';
    let scriptElement = document.getElementById(scriptId);
    if (allJsonLd.length > 0) {
        if (!scriptElement) {
            scriptElement = document.createElement('script');
            scriptElement.id = scriptId;
            scriptElement.setAttribute('type', 'application/ld+json');
            document.head.appendChild(scriptElement);
        }
        scriptElement.innerHTML = JSON.stringify(allJsonLd);
    } else if (scriptElement) {
        scriptElement.remove();
    }
    
    // Cleanup function
    return () => {
      // Potentially remove tags if this component unmounts, though in an SPA this might not be necessary.
    };
  }, [title, description, canonicalUrl, ogType, ogImageUrl, jsonLd, breadcrumbs]);

  return null;
};

export default Seo;